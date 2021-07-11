import * as sam from '@aws-cdk/aws-sam';
import * as cdk from '@aws-cdk/core';

export interface AccessConrtolLambdaProps {
  /**
   * The version of the serverless application.
   *
   * @default '1.0.2'
   */
  readonly semanticVersion?: string;
  /**
   * The minimum prediction confidence score above which PII classification and detection would be considered as final answer. Valid range (0.5 to 1.0).
   *
   * @default '0.5'
   */
  readonly confidenceThreshold?: string;
  /**
   * Number of threads to use for calling Comprehend's ContainsPiiEntities API. This controls the number of simultaneous calls that will be made from this Lambda.
   *
   * @default '20'
   */
  readonly containsPiiEntitiesThreadCount?: string;
  /**
   * Default language of the text to be processed. This code will be used for interacting with Comprehend.
   *
   * @default 'en'
   */
  readonly defaultLanguageCode?: string;
  /**
   * Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.
   *
   * @default '102400'
   */
  readonly documentMaxSize?: string;
  /**
   * Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.
   *
   * @default '50000'
   */
  readonly documentMaxSizeContainsPiiEntities?: string;
  /**
   * Whether to support partial objects or not. Accessing partial object through http headers such byte-range can corrupt the object and/or affect PII detection accuracy.
   *
   * @default 'false'
   */
  readonly isPartialObjectSupported?: string;
  /**
   * Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.
   *
   * @default 'INFO'
   */
  readonly logLevel?: string;
  /**
   * Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.
   *
   * @default '200'
   */
  readonly maxCharsOverlap?: string;
  /**
   * List of comma separated PII entity types to be considered for access control. Refer Comprehend's documentation page for list of supported PII entity types.
   *
   * @default 'ALL'
   */
  readonly piiEntityTypes?: string;
  /**
   * True if publish metrics to Cloudwatch, false otherwise. See README.md for details on CloudWatch metrics.
   *
   * @default 'true'
   */
  readonly publishCloudWatchMetrics?: string;
  /**
   * Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.
   *
   * @default '20'
   */
  readonly subsegmentOverlappingTokens?: string;
  /**
   * Handling logic for Unsupported files. Valid values are PASS and FAIL.
   *
   * @default 'FAIL'
   */
  readonly unsupportedFileHandling?: string;
}

export class AccessConrtolLambda extends cdk.Construct {
  /**
   * The name of the underlying resoure in the serverless application.
   *
   * @attribute
   */
  public readonly stackName: string;
  /**
   * The entity of the serverless application.
   */
  private readonly samApplication: sam.CfnApplication;
  constructor(scope: cdk.Construct, id: string, props: AccessConrtolLambdaProps) {
    super(scope, id);
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
    this.samApplication = new sam.CfnApplication(this, 'ComprehendPiiAccessControlS3ObjectLambda', {
      location: {
        applicationId: 'arn:aws:serverlessrepo:us-east-1:839782855223:applications/ComprehendPiiAccessControlS3ObjectLambda',
        semanticVersion: semanticVersion,
      },
      parameters: {
        ['ConfidenceThreshold']: confidenceThreshold,
        ['ContainsPiiEntitiesThreadCount']: containsPiiEntitiesThreadCount,
        ['DefaultLanguageCode']: defaultLanguageCode,
        ['DocumentMaxSize']: documentMaxSize,
        ['DocumentMaxSizeContainsPiiEntities']: documentMaxSizeContainsPiiEntities,
        ['IsPartialObjectSupported']: isPartialObjectSupported,
        ['LogLevel']: logLevel,
        ['MaxCharsOverlap']: maxCharsOverlap,
        ['PiiEntityTypes']: piiEntityTypes,
        ['PublishCloudWatchMetrics']: publishCloudWatchMetrics,
        ['SubsegmentOverlappingTokens']: subsegmentOverlappingTokens,
        ['UnsupportedFileHandling']: unsupportedFileHandling,
      },
    });
    this.stackName = cdk.Token.asString(this.samApplication.ref);
  }
}

export interface RedactionLambdaProps {
  /**
   * The version of the serverless application.
   *
   * @default '1.0.2'
   */
  readonly semanticVersion?: string;
  /**
   * Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.
   *
   * @default 'INFO'
   */
  readonly logLevel?: string;
  /**
   * Handling logic for Unsupported files. Valid values are PASS and FAIL.
   *
   * @default 'FAIL'
   */
  readonly unsupportedFileHandling?: string;
  /**
   * Whether to support partial objects or not. Accessing partial object through http headers such byte-range can corrupt the object and/or affect PII detection accuracy.
   *
   * @default 'false'
   */
  readonly isPartialObjectSupported?: string;
  /**
   * Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.
   *
   * @default '50000'
   */
  readonly documentMaxSizeContainsPiiEntities?: string;
  /**
   * Maximum document size (in bytes) to be used for making calls to Comprehend's DetectPiiEntities API.
   *
   * @default '5000'
   */
  readonly documentMaxSizeDetectPiiEntities?: string;
  /**
   * List of comma separated PII entity types to be considered for redaction. Refer Comprehend's documentation page for list of supported PII entity types.
   *
   * @default 'ALL'
   */
  readonly piiEntityTypes?: string;
  /**
   * A character that replaces each character in the redacted PII entity.
   *
   * @default '*'
   */
  readonly maskCharacter?: string;
  /**
   * Specifies whether the PII entity is redacted with the mask character or the entity type. Valid values - REPLACE_WITH_PII_ENTITY_TYPE and MASK.
   *
   * @fefault 'MASK'
   */
  readonly maskMode?: string;
  /**
   * Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.
   *
   * @default '20'
   */
  readonly subsegmentOverlappingTokens?: string;
  /**
   * Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.
   *
   * @default '102400'
   */
  readonly documentMaxSize?: string;
  /**
   * The minimum prediction confidence score above which PII classification and detection would be considered as final answer. Valid range (0.5 to 1.0).
   *
   * @default '0.5'
   */
  readonly confidenceThreshold?: string;
  /**
   * Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.
   *
   * @default '200'
   */
  readonly maxCharsOverlap?: string;
  /**
   * Default language of the text to be processed. This code will be used for interacting with Comprehend.
   *
   * @default 'en'
   */
  readonly defaultLanguageCode?: string;
  /**
   * Number of threads to use for calling Comprehend's DetectPiiEntities API. This controls the number of simultaneous calls that will be made from this Lambda.
   *
   * @default '8'
   */
  readonly detectPiiEntitiesThreadCount?: string;
  /**
   * Number of threads to use for calling Comprehend's ContainsPiiEntities API. This controls the number of simultaneous calls that will be made from this Lambda.
   *
   * @default '20'
   */
  readonly containsPiiEntitiesThreadCount?: string;
  /**
   * True if publish metrics to Cloudwatch, false otherwise. See README.md for details on CloudWatch metrics.
   *
   * @default 'true'
   */
  readonly publishCloudWatchMetrics?: string;
}

export class RedactionLambda extends cdk.Construct {
  /**
   * The name of the underlying resoure in the serverless application.
   *
   * @attribute
   */
  public readonly stackName: string;
  /**
   * The entity of the serverless application.
   */
  private readonly samApplication: sam.CfnApplication;
  constructor(scope: cdk.Construct, id: string, props?: RedactionLambdaProps) {
    super(scope, id);
    const semanticVersion = props?.semanticVersion ?? '1.0.2';
    const logLevel = props?.logLevel ?? 'INFO';
    const unsupportedFileHandling = props?.unsupportedFileHandling ?? 'FAIL';
    const isPartialObjectSupported = props?.isPartialObjectSupported ?? 'false';
    const documentMaxSizeContainsPiiEntities = props?.documentMaxSizeContainsPiiEntities ?? '50000';
    const documentMaxSizeDetectPiiEntities = props?.documentMaxSizeDetectPiiEntities ?? '5000';
    const piiEntityTypes = props?.piiEntityTypes ?? 'ALL';
    const maskCharacter = props?.maskCharacter ?? '*';
    const maskMode = props?.maskMode ?? 'MASK';
    const subsegmentOverlappingTokens = props?.subsegmentOverlappingTokens ?? '20';
    const documentMaxSize = props?.documentMaxSize ?? '102400';
    const confidenceThreshold = props?.confidenceThreshold ?? '0.5';
    const maxCharsOverlap = props?.maxCharsOverlap ?? '200';
    const defaultLanguageCode = props?.defaultLanguageCode ?? 'en';
    const detectPiiEntitiesThreadCount = props?.detectPiiEntitiesThreadCount ?? '8';
    const containsPiiEntitiesThreadCount = props?.containsPiiEntitiesThreadCount ?? '20';
    const publishCloudWatchMetrics = props?.publishCloudWatchMetrics ?? 'true';

    this.samApplication = new sam.CfnApplication(this, 'ComprehendPiiAccessControlS3ObjectLambda', {
      location: {
        applicationId: 'arn:aws:serverlessrepo:us-east-1:839782855223:applications/ComprehendPiiRedactionS3ObjectLambda',
        semanticVersion: semanticVersion,
      },
      parameters: {
        ['LogLevel']: logLevel,
        ['UnsupportedFileHandling']: unsupportedFileHandling,
        ['IsPartialObjectSupported']: isPartialObjectSupported,
        ['DocumentMaxSizeContainsPiiEntities']: documentMaxSizeContainsPiiEntities,
        ['DocumentMaxSizeDetectPiiEntities']: documentMaxSizeDetectPiiEntities,
        ['PiiEntityTypes']: piiEntityTypes,
        ['MaskCharacter']: maskCharacter,
        ['MaskMode']: maskMode,
        ['SubsegmentOverlappingTokens']: subsegmentOverlappingTokens,
        ['DocumentMaxSize']: documentMaxSize,
        ['ConfidenceThreshold']: confidenceThreshold,
        ['MaxCharsOverlap']: maxCharsOverlap,
        ['DefaultLanguageCode']: defaultLanguageCode,
        ['DetectPiiEntitiesThreadCount']: detectPiiEntitiesThreadCount,
        ['ContainsPiiEntitiesThreadCount']: containsPiiEntitiesThreadCount,
        ['PublishCloudWatchMetrics']: publishCloudWatchMetrics,
      },
    });
    this.stackName = cdk.Token.asString(this.samApplication.ref);
  }
}