import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
// import * as s3objectlambda from '@aws-cdk/aws-s3objectlambda';
import * as comprehend_lambda from './comprehend-lambdas';
import * as s3loal_iam from './iam-roles';


export interface ComprehendS3olabProps extends comprehend_lambda.AccessConrtolLambdaProps, s3loal_iam.GeneralRoleProps {
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
  // IAM role
  //   readonly policyName: string;
  //   readonly objectLambdaAccessPointName: string;
  //   readonly iamRoleName: string;
  // s3 bucket and access point
  //   readonly s3BucketPrefix: string;
  //   readonly accessControlAccessPointName: string;
  // object Lambda
  //   readonly semanticVersion: string;
  //   readonly confidenceThreshold: string;
  //   readonly containsPiiEntitiesThreadCount: string;
  //   readonly defaultLanguageCode: string;
  //   readonly documentMaxSize: string;
  //   readonly documentMaxSizeContainsPiiEntities: string;
  //   readonly isPartialObjectSupported: string;
  //   readonly logLevel: string;
  //   readonly maxCharsOverlap: string;
  //   readonly piiEntityTypes: string;
  //   readonly publishCloudWatchMetrics: string;
  //   readonly subsegmentOverlappingTokens: string;
  //   readonly unsupportedFileHandling: string;
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

    const accessControlLambda = new comprehend_lambda.AccessConrtolLambda(this, 'ServerlessLambda', {
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

    new s3loal_iam.GeneralRole(this, 'General', {
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
    // surveyBucket.node.addDependency(generalRole);

    new s3.CfnAccessPoint(this, 'AccessControlAccessPoint', {
      bucket: surveyBucket.bucketName,
      name: accessControlAccessPointName,
    });

    // new s3objectlambda.CfnAccessPoint(this, 'LambdaAccessPoint', {
    //     name: accessControlAccessPointName,
    //     objectLambdaConfiguration: {
    //         supportingAccessPoint: surveyAccessPoint.name,
    //         transformationConfigurations: [
    //             {
    //                 contentTransformation: JSON.stringify({
    //                     FunctionArn:
    //     })
    //             }
    //         ]
    //     }
    // });
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