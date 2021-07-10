import * as fs from 'fs';
import * as path from 'path';
import * as iam from '@aws-cdk/aws-iam';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as logs from '@aws-cdk/aws-logs';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3objectlambda from '@aws-cdk/aws-s3objectlambda';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import { AccessConrtolLambda, AccessConrtolLambdaProps } from './comprehend-lambdas';
import { GeneralRole, GeneralRoleProps } from './iam-roles';


export interface ComprehendS3olabProps extends AccessConrtolLambdaProps, GeneralRoleProps {
  /**
   * The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda.
   *
   * @default 6 random words
   */
  readonly s3BucketPrefix?: string;
  /**
   * The access point name for the access control Lambda with Amazon Comprehend.
   *
   * @default 'accessctl-s3-ap-survey-results-unknown-pii'
   */
  readonly accessControlAccessPointName?: string;
}

/**
 * Creates the foundation necessary to deploy the S3 Object Lambda Acceess Control Use Case.
 */
export class ComprehendS3olab extends cdk.Construct {
  /**
   * The ARN of the S3 Object Lambda for access control.
   */
  readonly s3objectLambdaAccessControlArn: string;
  /**
   * The ARN of the Lambda function combined with Amazon Comprehend
   */
  readonly piiAccessConrtolLambdaArn: string;
  constructor(scope: cdk.Construct, id: string, props: ComprehendS3olabProps) {
    super(scope, id);
    // IAM role
    const policyName = props.policyName ?? 'general-role-s3olap-policy';
    const objectLambdaAccessPointName = props.objectLambdaAccessPointName ?? 'accessctl-s3olap-survey-results-unknown-pii';
    const iamRoleName = props.iamRoleName ?? 'GeneralRole';
    // s3 bucekt and its access point
    const s3BucketPrefix = props.s3BucketPrefix ?? this.generateS3Prefix(6);
    const accessControlAccessPointName = props.accessControlAccessPointName ?? 'accessctl-s3-ap-survey-results-unknown-pii';
    // object Lambda
    const semanticVersion = props.semanticVersion ?? '1.0.2';
    const confidenceThreshold = props.confidenceThreshold ?? '0.5';
    const containsPiiEntitiesThreadCount = props.containsPiiEntitiesThreadCount ?? '20';
    const defaultLanguageCode = props.defaultLanguageCode ?? 'en';
    const documentMaxSize = props.documentMaxSize ?? '102400';
    const documentMaxSizeContainsPiiEntities = props.documentMaxSizeContainsPiiEntities ?? '50000';
    const isPartialObjectSupported = props.isPartialObjectSupported ?? 'false';
    const logLevel = props.logLevel ?? 'INFO';
    const maxCharsOverlap = props.maxCharsOverlap ?? '200';
    const piiEntityTypes = props.piiEntityTypes ?? 'ALL';
    const publishCloudWatchMetrics = props.publishCloudWatchMetrics ?? 'true';
    const subsegmentOverlappingTokens = props.subsegmentOverlappingTokens ?? '20';
    const unsupportedFileHandling = props.unsupportedFileHandling ?? 'FAIL';

    const accessControlLambda = new AccessConrtolLambda(this, 'ServerlessLambda', {
      semanticVersion: semanticVersion,
      confidenceThreshold: confidenceThreshold,
      containsPiiEntitiesThreadCount: containsPiiEntitiesThreadCount,
      defaultLanguageCode: defaultLanguageCode,
      documentMaxSize: documentMaxSize,
      documentMaxSizeContainsPiiEntities: documentMaxSizeContainsPiiEntities,
      isPartialObjectSupported: isPartialObjectSupported,
      logLevel: logLevel,
      maxCharsOverlap: maxCharsOverlap,
      piiEntityTypes: piiEntityTypes,
      publishCloudWatchMetrics: publishCloudWatchMetrics,
      subsegmentOverlappingTokens: subsegmentOverlappingTokens,
      unsupportedFileHandling: unsupportedFileHandling,
    });

    const generalRole = new GeneralRole(this, 'General', {
      objectLambdaAccessPointName: objectLambdaAccessPointName,
      policyName: policyName,
      iamRoleName: iamRoleName,
    });

    const surveyBucket = new s3.Bucket(this, 'SurveyResultBucket', {
      bucketName: `survey-results-unknown-pii-${s3BucketPrefix}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    surveyBucket.addToResourcePolicy(new iam.PolicyStatement(
      {
        sid: 'AWSBucketGetPolicy',
        principals: [new iam.AccountRootPrincipal()],
        actions: ['s3:GetObject'],
        effect: iam.Effect.ALLOW,
        resources: [`${surveyBucket.bucketArn}/*`],
        conditions: { ['StringEquals']: { 's3:DataAccessPointAccount': cdk.Aws.ACCOUNT_ID } },
      },
    ));
    surveyBucket.addToResourcePolicy(new iam.PolicyStatement(
      {
        sid: 'AWSBucketPutPolicy',
        principals: [new iam.AccountRootPrincipal()],
        actions: ['s3:PutObject'],
        effect: iam.Effect.ALLOW,
        resources: [`${surveyBucket.bucketArn}/*`],
      },
    ));
    surveyBucket.node.addDependency(accessControlLambda);
    surveyBucket.node.addDependency(generalRole);

    // Get the Lambda ARN of the function
    // const onEvent = new lambda.NodejsFunction(this, 'LambdaArnExpert', {
    //   description: 'A Lambda function that gets the ARN of `Comprehend-S3olap-AccessC-PiiAccessControlFunction`',
    //   entry: fs.existsSync(path.join(__dirname, 'resources/lambda-arn-helper.ts')) ? path.join(__dirname, 'resources/lambda-arn-helper.ts') : path.join(__dirname, 'resources/lambda-arn-helper.js'),
    //   handler: 'lambdaHandler',
    //   runtime: Runtime.NODEJS_12_X,
    //   bundling: {
    //     minify: true,
    //     sourceMap: true,
    //     externalModules: ['aws-sdk'],
    //   },
    // });
    // const customResourceRole = new iam.Role(this, 'CustomResourceRole', {
    //   assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    //   description: 'An execution role to find out the ARN of the access control Lambda.',
    //   managedPolicies: [
    //     iam.ManagedPolicy.fromAwsManagedPolicyName(
    //       'service-role/AWSLambdaBasicExecutionRole',
    //     ),
    //     iam.ManagedPolicy.fromAwsManagedPolicyName('AWSXRayDaemonWriteAccess'),
    //   ],
    //   inlinePolicies: {
    //     ComprehendS3ObjectLambdaCustomResourcePolicy: new iam.PolicyDocument({
    //       assignSids: true,
    //       statements: [
    //         new iam.PolicyStatement({
    //           sid: 'ListLambdaPermissions',
    //           effect: iam.Effect.ALLOW,
    //           actions: ['lambda:ListFunctions'],
    //           resources: ['*'],
    //         }),
    //         new iam.PolicyStatement({
    //           sid: 'GetLambdaFunctionsPermissions',
    //           effect: iam.Effect.ALLOW,
    //           actions: ['lambda:GetFunction'],
    //           resources: [`arn:${cdk.Aws.PARTITION}:lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:function:*`],
    //         }),
    //       ],
    //     }),
    //   },
    // });
    // const provider = new cr.Provider(this, 'Provider', {
    //   onEventHandler: onEvent,
    //   logRetention: logs.RetentionDays.ONE_MONTH,
    //   role: customResourceRole,
    // });
    // const lambdaArnSearchUnit = new cdk.CustomResource(this, 'lambdaArnSearchUnit', {
    //   serviceToken: provider.serviceToken,
    //   properties: {
    //     'LambdaFixedName': 'Comprehend-S3olap-AccessC-PiiAccessControlFunction'
    //   }
    // });
    // lambdaArnSearchUnit.node.addDependency(accessControlLambda);
    const lambdaArnCaptor = new LambdaArnCaptorCustomResource(this, 'LambdaArnCaptor', {
      partialLambdaName: 'Prod-DataBrew-Recipe-Deployer',
    });
    this.piiAccessConrtolLambdaArn = lambdaArnCaptor.lambdaArn;
    lambdaArnCaptor.node.addDependency(accessControlLambda);


    const surveyAccessPoint = new s3.CfnAccessPoint(this, 'AccessControlAccessPoint', {
      bucket: surveyBucket.bucketName,
      name: `${accessControlAccessPointName}-${this.generateS3Prefix(6)}`,
    });

    const accessControlObjectLambda = new s3objectlambda.CfnAccessPoint(this, 'LambdaAccessPoint', {
      name: accessControlAccessPointName,
      objectLambdaConfiguration: {
        supportingAccessPoint: surveyAccessPoint.name!,
        transformationConfigurations: [
          {
            actions: ['GetObject'],
            contentTransformation: new cdk.CfnJson(this, 'ObjectLambdaConfig', {
              value: {
                AwsLambda: {
                  FunctionArn: this.piiAccessConrtolLambdaArn,
                },
              },
            }),
          },
        ],
      },
    });
    this.s3objectLambdaAccessControlArn = cdk.Token.asString(cdk.Fn.getAtt(accessControlObjectLambda.logicalId, 'Arn'));
    accessControlObjectLambda.node.addDependency(lambdaArnCaptor);
  }

  private generateS3Prefix(length: number): string {
    var result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}


export interface LambdaArnCaptorResourceProps {
  /**
   * The partial fixed name of the Lambda function created from the serverless application.
   */
  readonly partialLambdaName: string;
}

export class LambdaArnCaptorCustomResource extends cdk.Construct {
  /**
   * The ARN of the Lambda function created from the serverless application.
   *
   * @see https://github.com/aws/aws-cdk/issues/8760
   */
  public readonly lambdaArn: string;
  constructor(scope: cdk.Construct, id: string, props: LambdaArnCaptorResourceProps) {
    super(scope, id);
    const customResourceRole = new iam.Role(this, 'CustomResourceRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      description: 'An execution role to find out the ARN of the access control Lambda.',
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AWSXRayDaemonWriteAccess'),
      ],
      inlinePolicies: {
        ComprehendS3ObjectLambdaCustomResourcePolicy: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'ListLambdaPermissions',
              effect: iam.Effect.ALLOW,
              actions: ['lambda:ListFunctions'],
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'GetLambdaFunctionsPermissions',
              effect: iam.Effect.ALLOW,
              actions: ['lambda:GetFunction', 'lambda:InvokeFunction'],
              resources: [`arn:${cdk.Aws.PARTITION}:lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:function:*`],
            }),
          ],
        }),
      },
    });
    const onEvent = new lambda.NodejsFunction(this, 'LambdaArnExpert', {
      description: `A Lambda function that gets the ARN of \`${props.partialLambdaName}\``,
      entry: fs.existsSync(path.join(__dirname, 'resources/lambda-arn-helper.ts')) ? path.join(__dirname, 'resources/lambda-arn-helper.ts') : path.join(__dirname, 'resources/lambda-arn-helper.js'),
      handler: 'lambdaHandler',
      timeout: cdk.Duration.minutes(2),
      runtime: Runtime.NODEJS_14_X,
      bundling: {
        minify: false,
        sourceMap: true,
        externalModules: ['aws-sdk'],
      },
      role: customResourceRole,
    });
    const provider = new cr.Provider(this, 'Provider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.ONE_MONTH,
      role: customResourceRole.withoutPolicyUpdates(),
    });
    const lambdaArnSearchUnit = new cdk.CustomResource(this, 'SearchUnit', {
      serviceToken: provider.serviceToken,
      properties: {
        LambdaFixedName: props.partialLambdaName,
      },
    });
    this.lambdaArn = onEvent.functionArn;
    this.lambdaArn = cdk.Token.asString(lambdaArnSearchUnit.getAtt('LambdaArn'));
  }
}