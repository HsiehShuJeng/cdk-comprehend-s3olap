import * as fs from 'fs';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3delpoy from 'aws-cdk-lib/aws-s3-deployment';
import * as s3objectlambda from 'aws-cdk-lib/aws-s3objectlambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { AccessConrtolLambda, AccessConrtolLambdaProps, RedactionLambda, RedactionLambdaProps } from './comprehend-lambdas';
import {
  AdminRole, AdminRoleProps,
  BillingRole, BillingRoleProps,
  CustSupportRole, CustSupportRoleProps,
  GeneralRole, GeneralRoleProps,
} from './iam-roles';

export enum IamRoleName {
  GENERAL = 'General',
  ADMIN = 'Admin',
  BILLING = 'Billing',
  CUST_SUPPORT = 'CustSupport'
}

export interface S3AccessPointNames {
  /**
   * The name of the S3 aceess point for the general role in the access control case.
   *
   * @default 'accessctl-s3-ap-survey-results-unknown-pii'
   */
  readonly general: string;
  /**
   * The name of the S3 aceess point for the admin role in the redaction case.
   *
   * @default 'admin-s3-access-point-call-transcripts-known-pii'
   */
  readonly admin: string;
  /**
   * The name of the S3 aceess point for the billing role in the redaction case.
   *
   * @default 'bill-s3-access-point-call-transcripts-known-pii'
   */
  readonly billing: string;
  /**
  * The name of the S3 aceess point for the customer support role in the redaction case.
  *
  * @default 'cs-s3-access-point-call-transcripts-known-pii'
  */
  readonly customerSupport: string;
}

export interface ComprehendS3olabProps {
  /**
   * The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the access control case.
   *
   * @default 6 random words
   */
  readonly surveyBucketPrefix?: string;
  /**
   * The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the redaction case.
   *
   * @default 6 random words
   */
  readonly transcriptsBucketPrefix?: string;
  /**
   * The names of the S3 access points for the access control case and redaction case.
   */
  readonly s3AccessPointNames?: S3AccessPointNames;
  /**
   * The parameters needed for the `ComprehendPiiAccessControlS3ObjectLambda` function.
   *
   */
  readonly accessControlLambdaConfig?: AccessConrtolLambdaProps;
  /**
   * The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `AdminRole`.
   */
  readonly adminRedactionLambdaConfig?: RedactionLambdaProps;
  /**
   * The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `BillingRole`.
   */
  readonly billingRedactionLambdaConfig?: RedactionLambdaProps;
  /**
  * The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `CustSupportRole`.
  */
  readonly cusrtSupportRedactionLambdaConfig?: RedactionLambdaProps;
  /**
   * The manageable properties for the IAM role used to access the `survey-results.txt` data.
   */
  readonly generalRoleConfig?: GeneralRoleProps;
  /**
   * The manageable properties for the administrator IAM role in the redaction case.
   */
  readonly adminRoleConfig?: AdminRoleProps;
  /**
   * The manageable properties for the billing IAM role in the redaction case.
   */
  readonly billingRoleConfig?: BillingRoleProps;
  /**
   * The manageable properties for the customer support IAM role in the redaction case.
   */
  readonly custSupportRoleConfig?: CustSupportRoleProps;
  /**
   * For distinguish test and normal deployment.
   *
   * @default true
   */
  readonly generateRandomCharacters?: boolean;
  /**
   * The directory path where `files/access_control/*.txt` and `files/redaction/*.txt` will be put.
   *
   * DO NOT INCLUDE `/` in the end.
   *
   * @default __dirname
   */
  readonly exampleFileDir?: string;
}

/**
 * Creates the foundation necessary to deploy the S3 Object Lambda Acceess Control Use Case.
 */
export class ComprehendS3olab extends Construct {
  /**
   * The ARN of the S3 Object Lambda for access control.
   */
  public readonly s3objectLambdaAccessControlArn: string;
  /**
   * The ARN of the S3 Object Lambda for the admin role in the redaction case.
   */
  public readonly s3objectLambdaAdminArn: string;
  /**
   * The ARN of the S3 Object Lambda for the billing role in the redaction case.
   */
  public readonly s3objectLambdaBillingArn: string;
  /**
   * The ARN of the S3 Object Lambda for the customer support role in the redaction case.
   */
  public readonly s3objectLambdaCustomerSupportArn: string;
  /**
   * The ARN of the Lambda function combined with Amazon Comprehend for the general case.
   */
  public readonly piiAccessConrtolLambdaArn: string;
  /**
   * The ARN of the Lambda function combined with Amazon Comprehend for thie administrator role in the redaction case.
   */
  public readonly adminLambdaArn: string;
  /**
  * The ARN of the Lambda function combined with Amazon Comprehend for thie billing role in the redaction case.
  */
  public readonly billingLambdaArn: string;
  /**
 * The ARN of the Lambda function combined with Amazon Comprehend for thie customer support role in the redaction case.
 */
  public readonly customerSupportLambdaArn: string;
  constructor(scope: Construct, id: string, props: ComprehendS3olabProps) {
    super(scope, id);
    const exampleFileDir = props?.exampleFileDir ?? __dirname;
    const generateRandomCharacters = props?.generateRandomCharacters ?? true;
    // prerequisites for IAM roles
    const generalRoleConfig = this.getIamRoleConfig(IamRoleName.GENERAL, props?.generalRoleConfig);
    const adminRoleConfig = this.getIamRoleConfig(IamRoleName.ADMIN, props?.adminRoleConfig);
    const billingRoleConfig = this.getIamRoleConfig(IamRoleName.BILLING, props?.billingRoleConfig);
    const custSupportRoleConfig = this.getIamRoleConfig(IamRoleName.CUST_SUPPORT, props?.custSupportRoleConfig);
    // s3 bucekt and its access points
    const surveyBucketPrefix = props.surveyBucketPrefix ?? this.generateS3Prefix(6);
    const transcriptsBucketPrefix = props.transcriptsBucketPrefix ?? this.generateS3Prefix(6);
    const s3AccessPointNames: S3AccessPointNames = {
      general: props?.s3AccessPointNames?.general ?? ((generateRandomCharacters) ? `accessctl-s3-ap-survey-results-unknown-pii-${this.generateS3Prefix(6)}` : 'accessctl-s3-ap-survey-results-unknown-pii'),
      admin: props?.s3AccessPointNames?.admin ?? ((generateRandomCharacters) ? `admin-s3-access-point-call-transcripts-known-pii-${this.generateS3Prefix(6)}` : 'admin-s3-access-point-call-transcripts-known-pii'),
      billing: props?.s3AccessPointNames?.billing ?? ((generateRandomCharacters) ? `bill-s3-access-point-call-transcripts-known-pii-${this.generateS3Prefix(6)}` : 'bill-s3-access-point-call-transcripts-known-pii'),
      customerSupport: props?.s3AccessPointNames?.customerSupport ?? ((generateRandomCharacters) ? `cs-s3-access-point-call-transcripts-known-pii-${this.generateS3Prefix(6)}` : 'cs-s3-access-point-call-transcripts-known-pii'),
    };
    // object Lambda
    const acsemanticVersion = props?.accessControlLambdaConfig?.semanticVersion ?? '1.0.2';
    const acconfidenceThreshold = props?.accessControlLambdaConfig?.confidenceThreshold ?? '0.5';
    const accontainsPiiEntitiesThreadCount = props?.accessControlLambdaConfig?.containsPiiEntitiesThreadCount ?? '20';
    const acdefaultLanguageCode = props?.accessControlLambdaConfig?.defaultLanguageCode ?? 'en';
    const acdocumentMaxSize = props?.accessControlLambdaConfig?.documentMaxSize ?? '102400';
    const acdocumentMaxSizeContainsPiiEntities = props?.accessControlLambdaConfig?.documentMaxSizeContainsPiiEntities ?? '50000';
    const acisPartialObjectSupported = props?.accessControlLambdaConfig?.isPartialObjectSupported ?? 'false';
    const aclogLevel = props?.accessControlLambdaConfig?.logLevel ?? 'INFO';
    const acmaxCharsOverlap = props?.accessControlLambdaConfig?.maxCharsOverlap ?? '200';
    const acpiiEntityTypes = props?.accessControlLambdaConfig?.piiEntityTypes ?? 'ALL';
    const acpublishCloudWatchMetrics = props?.accessControlLambdaConfig?.publishCloudWatchMetrics ?? 'true';
    const acsubsegmentOverlappingTokens = props?.accessControlLambdaConfig?.subsegmentOverlappingTokens ?? '20';
    const acunsupportedFileHandling = props?.accessControlLambdaConfig?.unsupportedFileHandling ?? 'FAIL';
    const accessControlLambda = new AccessConrtolLambda(this, 'ServerlessLambda', {
      semanticVersion: acsemanticVersion,
      confidenceThreshold: acconfidenceThreshold,
      containsPiiEntitiesThreadCount: accontainsPiiEntitiesThreadCount,
      defaultLanguageCode: acdefaultLanguageCode,
      documentMaxSize: acdocumentMaxSize,
      documentMaxSizeContainsPiiEntities: acdocumentMaxSizeContainsPiiEntities,
      isPartialObjectSupported: acisPartialObjectSupported,
      logLevel: aclogLevel,
      maxCharsOverlap: acmaxCharsOverlap,
      piiEntityTypes: acpiiEntityTypes,
      publishCloudWatchMetrics: acpublishCloudWatchMetrics,
      subsegmentOverlappingTokens: acsubsegmentOverlappingTokens,
      unsupportedFileHandling: acunsupportedFileHandling,
    });
    // ComprehendPiiRedactionS3ObjectLambda
    const adminRedactLambda = this.initializeRedactLambda(IamRoleName.ADMIN, props?.adminRedactionLambdaConfig);
    const billingRedactLambda = this.initializeRedactLambda(IamRoleName.BILLING, props?.billingRedactionLambdaConfig);
    const custSupportRedactLambda = this.initializeRedactLambda(IamRoleName.CUST_SUPPORT, props?.cusrtSupportRedactionLambdaConfig);
    billingRedactLambda.node.addDependency(adminRedactLambda);
    custSupportRedactLambda.node.addDependency(billingRedactLambda);

    // IAM roles
    const generalRole = new GeneralRole(this, 'General', {
      objectLambdaAccessPointName: generalRoleConfig.objectLambdaAccessPointName,
      policyName: generalRoleConfig.policyName,
      iamRoleName: generalRoleConfig.iamRoleName,
    });
    const adminRole = new AdminRole(this, 'Admin', {
      objectLambdaAccessPointName: adminRoleConfig.objectLambdaAccessPointName,
      policyName: adminRoleConfig.policyName,
      iamRoleName: adminRoleConfig.iamRoleName,
    });
    const billingRole = new BillingRole(this, 'Billing', {
      objectLambdaAccessPointName: billingRoleConfig.objectLambdaAccessPointName,
      policyName: billingRoleConfig.policyName,
      iamRoleName: billingRoleConfig.iamRoleName,
    });
    const custSupportRole = new CustSupportRole(this, 'CustSupport', {
      objectLambdaAccessPointName: custSupportRoleConfig.objectLambdaAccessPointName,
      policyName: custSupportRoleConfig.policyName,
      iamRoleName: custSupportRoleConfig.iamRoleName,
    });

    // S3 buckets
    const surveyBucket = new s3.Bucket(this, 'SurveyResultBucket', {
      bucketName: (generateRandomCharacters) ? `survey-results-unknown-pii-${surveyBucketPrefix}` : 'survey-results-unknown-pii-123456',
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
    const transcriptBucket = new s3.Bucket(this, 'TranscriptBucket', {
      bucketName: (generateRandomCharacters) ? `call-transcripts-known-pii-${transcriptsBucketPrefix}` : 'call-transcripts-known-pii-1234456',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    transcriptBucket.addToResourcePolicy(new iam.PolicyStatement(
      {
        sid: 'AWSBucketGetPolicy',
        principals: [new iam.AccountRootPrincipal()],
        actions: ['s3:GetObject'],
        effect: iam.Effect.ALLOW,
        resources: [`${transcriptBucket.bucketArn}/*`],
        conditions: { ['StringEquals']: { 's3:DataAccessPointAccount': cdk.Aws.ACCOUNT_ID } },
      },
    ));
    transcriptBucket.addToResourcePolicy(new iam.PolicyStatement(
      {
        sid: 'AWSBucketPutPolicy',
        principals: [new iam.AccountRootPrincipal()],
        actions: ['s3:PutObject'],
        effect: iam.Effect.ALLOW,
        resources: [`${transcriptBucket.bucketArn}/*`],
      },
    ));
    surveyBucket.node.addDependency(accessControlLambda);
    surveyBucket.node.addDependency(generalRole);
    transcriptBucket.node.addDependency(adminRedactLambda);
    transcriptBucket.node.addDependency(billingRedactLambda);
    transcriptBucket.node.addDependency(custSupportRedactLambda);
    transcriptBucket.node.addDependency(adminRole);
    transcriptBucket.node.addDependency(billingRole);
    transcriptBucket.node.addDependency(custSupportRole);

    // custom resources
    const generalLambdaArnCaptor = new LambdaArnCaptorCustomResource(this, 'GeneralCaptor', {
      roleName: IamRoleName.GENERAL,
      partialLambdaName: 'PiiAccessControlFunction',
    });
    const adminLambdaArnCaptor = new LambdaArnCaptorCustomResource(this, 'AdminLambdaCaptor', {
      roleName: IamRoleName.ADMIN,
      partialLambdaName: 'PiiRedactionFunction',
    });
    const billingLambdaArnCaptor = new LambdaArnCaptorCustomResource(this, 'BillingCaptor', {
      roleName: IamRoleName.BILLING,
      partialLambdaName: 'PiiRedactionFunction',
    });
    const customSupportLambdaArnCaptor = new LambdaArnCaptorCustomResource(this, 'CustomSupportCaptor', {
      roleName: IamRoleName.CUST_SUPPORT,
      partialLambdaName: 'PiiRedactionFunction',
    });
    generalLambdaArnCaptor.node.addDependency(accessControlLambda);
    adminLambdaArnCaptor.node.addDependency(adminRedactLambda);
    billingLambdaArnCaptor.node.addDependency(billingRedactLambda);
    customSupportLambdaArnCaptor.node.addDependency(custSupportRedactLambda);
    this.piiAccessConrtolLambdaArn = generalLambdaArnCaptor.lambdaArn;
    this.adminLambdaArn = adminLambdaArnCaptor.lambdaArn;
    this.billingLambdaArn = billingLambdaArnCaptor.lambdaArn;
    this.customerSupportLambdaArn = customSupportLambdaArnCaptor.lambdaArn;

    // S3 access points
    const generalAccessPoint = new s3.CfnAccessPoint(this, 'AccessControlS3AccessPoint', {
      bucket: surveyBucket.bucketName,
      // name: s3AccessPointNames.general.substring(0, 50),
    });
    generalAccessPoint.addPropertyOverride('Name', s3AccessPointNames.general.substring(0, 50));
    generalAccessPoint.addOverride;
    const adminAccessPoint = new s3.CfnAccessPoint(this, 'AdminS3AccessPoint', {
      bucket: transcriptBucket.bucketName,
      // name: s3AccessPointNames.admin.substring(0, 50),
    });
    adminAccessPoint.addPropertyOverride('Name', s3AccessPointNames.admin.substring(0, 50));
    const billingAccessPoint = new s3.CfnAccessPoint(this, 'BillingS3AccessPoint', {
      bucket: transcriptBucket.bucketName,
      // name: s3AccessPointNames.billing.substring(0, 50),
    });
    adminAccessPoint.addPropertyOverride('Name', s3AccessPointNames.billing.substring(0, 50));
    const customerSupportAccessPoint = new s3.CfnAccessPoint(this, 'CustomerSupportS3AccessPoint', {
      bucket: transcriptBucket.bucketName,
      // name: s3AccessPointNames.customerSupport.substring(0, 50),
    });
    customerSupportAccessPoint.addPropertyOverride('Name', s3AccessPointNames.customerSupport.substring(0, 50));

    // S3ObjectLambda resources
    const accessControlObjectLambda = new s3objectlambda.CfnAccessPoint(this, 'GeneralLambdaAccessPoint', {
      name: generalRoleConfig.objectLambdaAccessPointName,
      objectLambdaConfiguration: {
        supportingAccessPoint: `arn:${cdk.Aws.PARTITION}:s3:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${generalAccessPoint.attrName}`,
        transformationConfigurations: [
          {
            actions: ['GetObject'],
            contentTransformation: new cdk.CfnJson(this, 'GeneralObjectLambdaConfig', {
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
    const adminObjectLambda = new s3objectlambda.CfnAccessPoint(this, 'AdminLambdaAccessPoint', {
      name: adminRoleConfig.objectLambdaAccessPointName,
      objectLambdaConfiguration: {
        supportingAccessPoint: `arn:${cdk.Aws.PARTITION}:s3:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${adminAccessPoint.attrName}`,
        transformationConfigurations: [
          {
            actions: ['GetObject'],
            contentTransformation: new cdk.CfnJson(this, 'AdminObjectLambdaConfig', {
              value: {
                AwsLambda: {
                  FunctionArn: this.adminLambdaArn,
                },
              },
            }),
          },
        ],
      },
    });
    const billingObjectLambda = new s3objectlambda.CfnAccessPoint(this, 'BillingLambdaAccessPoint', {
      name: billingRoleConfig.objectLambdaAccessPointName,
      objectLambdaConfiguration: {
        supportingAccessPoint: `arn:${cdk.Aws.PARTITION}:s3:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${billingAccessPoint.attrName}`,
        transformationConfigurations: [
          {
            actions: ['GetObject'],
            contentTransformation: new cdk.CfnJson(this, 'BillingObjectLambdaConfig', {
              value: {
                AwsLambda: {
                  FunctionArn: this.billingLambdaArn,
                },
              },
            }),
          },
        ],
      },
    });
    const customerSupportObjectLambda = new s3objectlambda.CfnAccessPoint(this, 'CustomerSupportLambdaAccessPoint', {
      name: custSupportRoleConfig.objectLambdaAccessPointName,
      objectLambdaConfiguration: {
        supportingAccessPoint: `arn:${cdk.Aws.PARTITION}:s3:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${customerSupportAccessPoint.attrName}`,
        transformationConfigurations: [
          {
            actions: ['GetObject'],
            contentTransformation: new cdk.CfnJson(this, 'CustomerSupportObjectLambdaConfig', {
              value: {
                AwsLambda: {
                  FunctionArn: this.customerSupportLambdaArn,
                },
              },
            }),
          },
        ],
      },
    });

    // Automatic uploading
    const surveyFilePath = path.join(exampleFileDir, 'files/access_control');
    const redactionFilePath = path.join(exampleFileDir, 'files/redaction');
    console.log(`surveyFilePath: ${surveyFilePath}`);
    console.log(`redactionFilePath: ${redactionFilePath}`);
    if (fs.existsSync(surveyFilePath)) {
      const deployFiles = new s3delpoy.BucketDeployment(this, 'DeploySurveyResultFiles', {
        sources: [s3delpoy.Source.asset(surveyFilePath)],
        destinationBucket: surveyBucket,
      });
      deployFiles.node.addDependency(accessControlObjectLambda);
    };
    if (fs.existsSync(redactionFilePath)) {
      const deployTranscriptFiles = new s3delpoy.BucketDeployment(this, 'DeployTranscriptFiles', {
        sources: [s3delpoy.Source.asset(redactionFilePath)],
        destinationBucket: transcriptBucket,
      });
      deployTranscriptFiles.node.addDependency(adminObjectLambda);
      deployTranscriptFiles.node.addDependency(billingObjectLambda);
      deployTranscriptFiles.node.addDependency(customerSupportObjectLambda);
    };

    this.s3objectLambdaAccessControlArn = cdk.Token.asString(cdk.Fn.getAtt(accessControlObjectLambda.logicalId, 'Arn'));
    this.s3objectLambdaAdminArn = cdk.Token.asString(cdk.Fn.getAtt(adminObjectLambda.logicalId, 'Arn'));
    this.s3objectLambdaBillingArn = cdk.Token.asString(cdk.Fn.getAtt(billingObjectLambda.logicalId, 'Arn'));
    this.s3objectLambdaCustomerSupportArn = cdk.Token.asString(cdk.Fn.getAtt(customerSupportObjectLambda.logicalId, 'Arn'));
    accessControlObjectLambda.node.addDependency(generalLambdaArnCaptor);
    adminObjectLambda.node.addDependency(adminLambdaArnCaptor);
    billingObjectLambda.node.addDependency(billingLambdaArnCaptor);
    customerSupportObjectLambda.node.addDependency(customSupportLambdaArnCaptor);
  }

  public generateS3Prefix(length: number): string {
    var result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Creates a redaction Lambda function for a speicfic IAM role.
   *
   * @param roleName the name of the corresponding IAM role
   * @param serverlessLambdaConfig the corresponding parameter setting for the Amazon Comprehend.
   */
  private initializeRedactLambda = (roleName: string, serverlessLambdaConfig?: RedactionLambdaProps): RedactionLambda => {
    const semanticVersion = serverlessLambdaConfig?.semanticVersion ?? '1.0.2';
    const logLevel = serverlessLambdaConfig?.logLevel ?? 'INFO';
    const unsupportedFileHandling = serverlessLambdaConfig?.unsupportedFileHandling ?? 'FAIL';
    const isPartialObjectSupported = serverlessLambdaConfig?.isPartialObjectSupported ?? 'false';
    const documentMaxSizeContainsPiiEntities = serverlessLambdaConfig?.documentMaxSizeContainsPiiEntities ?? '50000';
    const documentMaxSizeDetectPiiEntities = serverlessLambdaConfig?.documentMaxSizeDetectPiiEntities ?? '5000';
    const piiEntityTypes = serverlessLambdaConfig?.piiEntityTypes ?? 'ALL';
    const maskCharacter = serverlessLambdaConfig?.maskCharacter ?? '*';
    const maskMode = serverlessLambdaConfig?.maskMode ?? 'MASK';
    const subsegmentOverlappingTokens = serverlessLambdaConfig?.subsegmentOverlappingTokens ?? '20';
    const documentMaxSize = serverlessLambdaConfig?.documentMaxSize ?? '102400';
    const confidenceThreshold = serverlessLambdaConfig?.confidenceThreshold ?? '0.5';
    const maxCharsOverlap = serverlessLambdaConfig?.maxCharsOverlap ?? '200';
    const defaultLanguageCode = serverlessLambdaConfig?.defaultLanguageCode ?? 'en';
    const detectPiiEntitiesThreadCount = serverlessLambdaConfig?.detectPiiEntitiesThreadCount ?? '8';
    const containsPiiEntitiesThreadCount = serverlessLambdaConfig?.containsPiiEntitiesThreadCount ?? '20';
    const publishCloudWatchMetrics = serverlessLambdaConfig?.publishCloudWatchMetrics ?? 'true';

    return new RedactionLambda(this, `ServerlessRedactLambda-${roleName}`, {
      semanticVersion: semanticVersion,
      logLevel: logLevel,
      unsupportedFileHandling: unsupportedFileHandling,
      isPartialObjectSupported: isPartialObjectSupported,
      documentMaxSizeContainsPiiEntities: documentMaxSizeContainsPiiEntities,
      documentMaxSizeDetectPiiEntities: documentMaxSizeDetectPiiEntities,
      piiEntityTypes: piiEntityTypes,
      maskCharacter: maskCharacter,
      maskMode: maskMode,
      subsegmentOverlappingTokens: subsegmentOverlappingTokens,
      documentMaxSize: documentMaxSize,
      confidenceThreshold: confidenceThreshold,
      maxCharsOverlap: maxCharsOverlap,
      defaultLanguageCode: defaultLanguageCode,
      detectPiiEntitiesThreadCount: detectPiiEntitiesThreadCount,
      containsPiiEntitiesThreadCount: containsPiiEntitiesThreadCount,
      publishCloudWatchMetrics: publishCloudWatchMetrics,
    });
  };

  /**
   * Gets properties related to the IAM roles.
   *
   * @param roleName the name of the corresponding IAM role.
   * @param roleConfig the corresponding parameter setting for one of the IAM role.
   * @returns the property group.
   */
  private getIamRoleConfig = (roleName: string, roleConfig?: GeneralRoleProps | AdminRoleProps | BillingRoleProps | CustSupportRoleProps) => {
    return {
      policyName: roleConfig?.policyName ?? this._getDefaultPolicyName(roleName),
      objectLambdaAccessPointName: roleConfig?.objectLambdaAccessPointName ?? this._getObjectLambdaAccessPointName(roleName),
      iamRoleName: roleConfig?.policyName ?? this._getRoleName(roleName),
    };
  };

  /**
   * Returns the policy name according to the IAM role.
   *
   * @param roleName the name of the corresponding IAM role.
   */
  private _getDefaultPolicyName(roleName: string): string {
    switch (roleName) {
      case IamRoleName.GENERAL: return 'general-role-s3olap-policy';
      case IamRoleName.ADMIN: return 'admin-role-s3olap-policy';
      case IamRoleName.BILLING: return 'billing-role-s3olap-policy';
      case IamRoleName.CUST_SUPPORT: return 'customersupport-role-s3olap-policy';
      default:
        console.log('Check the name of the IAM role, there might be a problematci spelling.');
        return 'undefined';
    }
  }

  /**
   * Returns the corresponding name for the access point of the S3 Object Lambda according to the IAM role.
   *
   * @param roleName the name of the corresponding IAM role.
   */
  private _getObjectLambdaAccessPointName(roleName: string): string {
    switch (roleName) {
      case IamRoleName.GENERAL: return 'accessctl-s3olap-survey-results-unknown-pii';
      case IamRoleName.ADMIN: return 'admin-s3olap-call-transcripts-known-pii';
      case IamRoleName.BILLING: return 'billing-s3olap-call-transcripts-known-pii';
      case IamRoleName.CUST_SUPPORT: return 'custsupport-s3olap-call-transcripts-known-pii';
      default:
        console.log('Check the name of the IAM role, there might be a problematci spelling.');
        return 'undefined';
    }
  }

  /**
   * Returns the corresponding name for the IAM role.
   *
   * @param roleName the name of the corresponding IAM role.
   */
  private _getRoleName(roleName: string): string {
    switch (roleName) {
      case IamRoleName.GENERAL: return 'GeneralRole';
      case IamRoleName.ADMIN: return 'RedactionAdminRole';
      case IamRoleName.BILLING: return 'RedactionBillingRole';
      case IamRoleName.CUST_SUPPORT: return 'RedactionCustSupportRole';
      default:
        console.log('Check the name of the IAM role, there might be a problematci spelling.');
        return 'undefined';
    }
  }
}


export interface LambdaArnCaptorResourceProps {
  /**
   * the name of the corresponding IAM role
   */
  readonly roleName: string;
  /**
   * The partial fixed name of the gemeral Lambda function created from the serverless application.
   */
  readonly partialLambdaName: string;
}

export class LambdaArnCaptorCustomResource extends Construct {
  /**
   * The ARN of the general Lambda function created from the serverless application.
   *
   * @see https://github.com/aws/aws-cdk/issues/8760
   */
  public readonly lambdaArn: string;
  constructor(scope: Construct, id: string, props: LambdaArnCaptorResourceProps) {
    super(scope, id);
    const customResourceRole = new iam.Role(this, 'CRRole', {
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
    const onEvent = new lambda.NodejsFunction(this, 'ArnExpert', {
      description: `A Lambda function that gets the ARN of \`${props.partialLambdaName}\``,
      entry: fs.existsSync(path.join(__dirname, 'resources/lambda-arn-helper.ts')) ? path.join(__dirname, 'resources/lambda-arn-helper.ts') : path.join(__dirname, 'resources/lambda-arn-helper.js'),
      handler: 'lambdaHandler',
      timeout: cdk.Duration.minutes(2),
      runtime: Runtime.NODEJS_20_X,
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
    const lambdaArnSearchUnit = new cdk.CustomResource(this, `${props.roleName}GeneralSearchUnit`, {
      serviceToken: provider.serviceToken,
      properties: {
        LambdaFixedName: props.partialLambdaName,
        Genre: props.roleName,
      },
    });
    this.lambdaArn = cdk.Token.asString(lambdaArnSearchUnit.getAtt('LambdaArn'));
  }
}