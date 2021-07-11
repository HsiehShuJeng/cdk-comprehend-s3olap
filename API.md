# API Reference

**Classes**

Name|Description
----|-----------
[AccessConrtolLambda](#cdk-comprehend-s3olap-accessconrtollambda)|*No description*
[GeneralRole](#cdk-comprehend-s3olap-generalrole)|The role that you are going to assume (switch role).
[RedactionLambda](#cdk-comprehend-s3olap-redactionlambda)|*No description*


**Structs**

Name|Description
----|-----------
[AccessConrtolLambdaProps](#cdk-comprehend-s3olap-accessconrtollambdaprops)|*No description*
[GeneralRoleProps](#cdk-comprehend-s3olap-generalroleprops)|*No description*
[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)|*No description*



## class AccessConrtolLambda  <a id="cdk-comprehend-s3olap-accessconrtollambda"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new AccessConrtolLambda(scope: Construct, id: string, props: AccessConrtolLambdaProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AccessConrtolLambdaProps](#cdk-comprehend-s3olap-accessconrtollambdaprops)</code>)  *No description*
  * **confidenceThreshold** (<code>string</code>)  The minimum prediction confidence score above which PII classification and detection would be considered as final answer. __*Default*__: '0.5'
  * **containsPiiEntitiesThreadCount** (<code>string</code>)  Number of threads to use for calling Comprehend's ContainsPiiEntities API. __*Default*__: '20'
  * **defaultLanguageCode** (<code>string</code>)  Default language of the text to be processed. __*Default*__: 'en'
  * **documentMaxSize** (<code>string</code>)  Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size. __*Default*__: '102400'
  * **documentMaxSizeContainsPiiEntities** (<code>string</code>)  Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API. __*Default*__: '50000'
  * **isPartialObjectSupported** (<code>string</code>)  Whether to support partial objects or not. __*Default*__: 'false'
  * **logLevel** (<code>string</code>)  Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc. __*Default*__: 'INFO'
  * **maxCharsOverlap** (<code>string</code>)  Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit. __*Default*__: '200'
  * **piiEntityTypes** (<code>string</code>)  List of comma separated PII entity types to be considered for access control. __*Default*__: 'ALL'
  * **publishCloudWatchMetrics** (<code>string</code>)  True if publish metrics to Cloudwatch, false otherwise. __*Default*__: 'true'
  * **semanticVersion** (<code>string</code>)  The version of the serverless application. __*Default*__: '1.0.2'
  * **subsegmentOverlappingTokens** (<code>string</code>)  Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit. __*Default*__: '20'
  * **unsupportedFileHandling** (<code>string</code>)  Handling logic for Unsupported files. __*Default*__: 'FAIL'



### Properties


Name | Type | Description 
-----|------|-------------
**stackName** | <code>string</code> | The name of the underlying resoure in the serverless application.



## class GeneralRole  <a id="cdk-comprehend-s3olap-generalrole"></a>

The role that you are going to assume (switch role).

Explores how the S3 Object Lambda works.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new GeneralRole(scope: Construct, id: string, props: GeneralRoleProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GeneralRoleProps](#cdk-comprehend-s3olap-generalroleprops)</code>)  *No description*
  * **iamRoleName** (<code>string</code>)  The name of the IAM role. __*Default*__: 'GeneralRole'
  * **objectLambdaAccessPointName** (<code>string</code>)  The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. __*Default*__: 'accessctl-s3olap-survey-results-unknown-pii'
  * **policyName** (<code>string</code>)  The name of the IAM policy for the IAM role. __*Default*__: 'general-role-s3olap-policy'



### Properties


Name | Type | Description 
-----|------|-------------
**roleArn** | <code>string</code> | The ARN of the IAM role.
**roleId** | <code>string</code> | The unique string identifying the role.
**roleName** | <code>string</code> | The name of the IAM role.



## class RedactionLambda  <a id="cdk-comprehend-s3olap-redactionlambda"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new RedactionLambda(scope: Construct, id: string, props?: RedactionLambdaProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code>)  *No description*
  * **confidenceThreshold** (<code>string</code>)  The minimum prediction confidence score above which PII classification and detection would be considered as final answer. __*Default*__: '0.5'
  * **containsPiiEntitiesThreadCount** (<code>string</code>)  Number of threads to use for calling Comprehend's ContainsPiiEntities API. __*Default*__: '20'
  * **defaultLanguageCode** (<code>string</code>)  Default language of the text to be processed. __*Default*__: 'en'
  * **detectPiiEntitiesThreadCount** (<code>string</code>)  Number of threads to use for calling Comprehend's DetectPiiEntities API. __*Default*__: '8'
  * **documentMaxSize** (<code>string</code>)  Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size. __*Default*__: '102400'
  * **documentMaxSizeContainsPiiEntities** (<code>string</code>)  Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API. __*Default*__: '50000'
  * **documentMaxSizeDetectPiiEntities** (<code>string</code>)  Maximum document size (in bytes) to be used for making calls to Comprehend's DetectPiiEntities API. __*Default*__: '5000'
  * **isPartialObjectSupported** (<code>string</code>)  Whether to support partial objects or not. __*Default*__: 'false'
  * **logLevel** (<code>string</code>)  Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc. __*Default*__: 'INFO'
  * **maskCharacter** (<code>string</code>)  A character that replaces each character in the redacted PII entity. __*Default*__: '*'
  * **maskMode** (<code>string</code>)  Specifies whether the PII entity is redacted with the mask character or the entity type. __*Optional*__
  * **maxCharsOverlap** (<code>string</code>)  Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit. __*Default*__: '200'
  * **piiEntityTypes** (<code>string</code>)  List of comma separated PII entity types to be considered for redaction. __*Default*__: 'ALL'
  * **publishCloudWatchMetrics** (<code>string</code>)  True if publish metrics to Cloudwatch, false otherwise. __*Default*__: 'true'
  * **semanticVersion** (<code>string</code>)  The version of the serverless application. __*Default*__: '1.0.2'
  * **subsegmentOverlappingTokens** (<code>string</code>)  Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit. __*Default*__: '20'
  * **unsupportedFileHandling** (<code>string</code>)  Handling logic for Unsupported files. __*Default*__: 'FAIL'



### Properties


Name | Type | Description 
-----|------|-------------
**stackName** | <code>string</code> | The name of the underlying resoure in the serverless application.



## struct AccessConrtolLambdaProps  <a id="cdk-comprehend-s3olap-accessconrtollambdaprops"></a>






Name | Type | Description 
-----|------|-------------
**confidenceThreshold**? | <code>string</code> | The minimum prediction confidence score above which PII classification and detection would be considered as final answer.<br/>__*Default*__: '0.5'
**containsPiiEntitiesThreadCount**? | <code>string</code> | Number of threads to use for calling Comprehend's ContainsPiiEntities API.<br/>__*Default*__: '20'
**defaultLanguageCode**? | <code>string</code> | Default language of the text to be processed.<br/>__*Default*__: 'en'
**documentMaxSize**? | <code>string</code> | Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.<br/>__*Default*__: '102400'
**documentMaxSizeContainsPiiEntities**? | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.<br/>__*Default*__: '50000'
**isPartialObjectSupported**? | <code>string</code> | Whether to support partial objects or not.<br/>__*Default*__: 'false'
**logLevel**? | <code>string</code> | Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.<br/>__*Default*__: 'INFO'
**maxCharsOverlap**? | <code>string</code> | Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.<br/>__*Default*__: '200'
**piiEntityTypes**? | <code>string</code> | List of comma separated PII entity types to be considered for access control.<br/>__*Default*__: 'ALL'
**publishCloudWatchMetrics**? | <code>string</code> | True if publish metrics to Cloudwatch, false otherwise.<br/>__*Default*__: 'true'
**semanticVersion**? | <code>string</code> | The version of the serverless application.<br/>__*Default*__: '1.0.2'
**subsegmentOverlappingTokens**? | <code>string</code> | Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.<br/>__*Default*__: '20'
**unsupportedFileHandling**? | <code>string</code> | Handling logic for Unsupported files.<br/>__*Default*__: 'FAIL'



## struct GeneralRoleProps  <a id="cdk-comprehend-s3olap-generalroleprops"></a>






Name | Type | Description 
-----|------|-------------
**iamRoleName**? | <code>string</code> | The name of the IAM role.<br/>__*Default*__: 'GeneralRole'
**objectLambdaAccessPointName**? | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.<br/>__*Default*__: 'accessctl-s3olap-survey-results-unknown-pii'
**policyName**? | <code>string</code> | The name of the IAM policy for the IAM role.<br/>__*Default*__: 'general-role-s3olap-policy'



## struct RedactionLambdaProps  <a id="cdk-comprehend-s3olap-redactionlambdaprops"></a>






Name | Type | Description 
-----|------|-------------
**confidenceThreshold**? | <code>string</code> | The minimum prediction confidence score above which PII classification and detection would be considered as final answer.<br/>__*Default*__: '0.5'
**containsPiiEntitiesThreadCount**? | <code>string</code> | Number of threads to use for calling Comprehend's ContainsPiiEntities API.<br/>__*Default*__: '20'
**defaultLanguageCode**? | <code>string</code> | Default language of the text to be processed.<br/>__*Default*__: 'en'
**detectPiiEntitiesThreadCount**? | <code>string</code> | Number of threads to use for calling Comprehend's DetectPiiEntities API.<br/>__*Default*__: '8'
**documentMaxSize**? | <code>string</code> | Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.<br/>__*Default*__: '102400'
**documentMaxSizeContainsPiiEntities**? | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.<br/>__*Default*__: '50000'
**documentMaxSizeDetectPiiEntities**? | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's DetectPiiEntities API.<br/>__*Default*__: '5000'
**isPartialObjectSupported**? | <code>string</code> | Whether to support partial objects or not.<br/>__*Default*__: 'false'
**logLevel**? | <code>string</code> | Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.<br/>__*Default*__: 'INFO'
**maskCharacter**? | <code>string</code> | A character that replaces each character in the redacted PII entity.<br/>__*Default*__: '*'
**maskMode**? | <code>string</code> | Specifies whether the PII entity is redacted with the mask character or the entity type.<br/>__*Optional*__
**maxCharsOverlap**? | <code>string</code> | Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.<br/>__*Default*__: '200'
**piiEntityTypes**? | <code>string</code> | List of comma separated PII entity types to be considered for redaction.<br/>__*Default*__: 'ALL'
**publishCloudWatchMetrics**? | <code>string</code> | True if publish metrics to Cloudwatch, false otherwise.<br/>__*Default*__: 'true'
**semanticVersion**? | <code>string</code> | The version of the serverless application.<br/>__*Default*__: '1.0.2'
**subsegmentOverlappingTokens**? | <code>string</code> | Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.<br/>__*Default*__: '20'
**unsupportedFileHandling**? | <code>string</code> | Handling logic for Unsupported files.<br/>__*Default*__: 'FAIL'



