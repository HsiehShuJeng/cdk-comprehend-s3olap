# API Reference

**Classes**

Name|Description
----|-----------
[AccessConrtolLambda](#cdk-comprehend-s3olap-accessconrtollambda)|*No description*
[AdminRole](#cdk-comprehend-s3olap-adminrole)|*No description*
[BillingRole](#cdk-comprehend-s3olap-billingrole)|*No description*
[ComprehendS3olab](#cdk-comprehend-s3olap-comprehends3olab)|Creates the foundation necessary to deploy the S3 Object Lambda Acceess Control Use Case.
[CustSupportRole](#cdk-comprehend-s3olap-custsupportrole)|*No description*
[GeneralRole](#cdk-comprehend-s3olap-generalrole)|The role that you are going to assume (switch role).
[LambdaArnCaptorCustomResource](#cdk-comprehend-s3olap-lambdaarncaptorcustomresource)|*No description*
[RedactionLambda](#cdk-comprehend-s3olap-redactionlambda)|*No description*


**Structs**

Name|Description
----|-----------
[AccessConrtolLambdaProps](#cdk-comprehend-s3olap-accessconrtollambdaprops)|*No description*
[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)|*No description*
[BillingRoleProps](#cdk-comprehend-s3olap-billingroleprops)|*No description*
[ComprehendS3olabProps](#cdk-comprehend-s3olap-comprehends3olabprops)|*No description*
[CustSupportRoleProps](#cdk-comprehend-s3olap-custsupportroleprops)|*No description*
[GeneralRoleProps](#cdk-comprehend-s3olap-generalroleprops)|*No description*
[LambdaArnCaptorResourceProps](#cdk-comprehend-s3olap-lambdaarncaptorresourceprops)|*No description*
[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)|*No description*
[S3AccessPointNames](#cdk-comprehend-s3olap-s3accesspointnames)|*No description*


**Enums**

Name|Description
----|-----------
[IamRoleName](#cdk-comprehend-s3olap-iamrolename)|*No description*



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



## class AdminRole  <a id="cdk-comprehend-s3olap-adminrole"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new AdminRole(scope: Construct, id: string, props?: AdminRoleProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)</code>)  *No description*
  * **iamRoleName** (<code>string</code>)  The name of the IAM role. __*Default*__: 'RedactionAdminRole'
  * **objectLambdaAccessPointName** (<code>string</code>)  The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. __*Default*__: 'admin-s3olap-call-transcripts-known-pii'
  * **policyName** (<code>string</code>)  The name of the IAM policy for the IAM role. __*Default*__: 'admin-role-s3olap-policy'



### Properties


Name | Type | Description 
-----|------|-------------
**roleArn** | <code>string</code> | The ARN of the IAM role.
**roleId** | <code>string</code> | The unique string identifying the role.
**roleName** | <code>string</code> | The name of the IAM role.



## class BillingRole  <a id="cdk-comprehend-s3olap-billingrole"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BillingRole(scope: Construct, id: string, props?: AdminRoleProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)</code>)  *No description*
  * **iamRoleName** (<code>string</code>)  The name of the IAM role. __*Default*__: 'RedactionAdminRole'
  * **objectLambdaAccessPointName** (<code>string</code>)  The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. __*Default*__: 'admin-s3olap-call-transcripts-known-pii'
  * **policyName** (<code>string</code>)  The name of the IAM policy for the IAM role. __*Default*__: 'admin-role-s3olap-policy'



### Properties


Name | Type | Description 
-----|------|-------------
**roleArn** | <code>string</code> | The ARN of the IAM role.
**roleId** | <code>string</code> | The unique string identifying the role.
**roleName** | <code>string</code> | The name of the IAM role.



## class ComprehendS3olab  <a id="cdk-comprehend-s3olap-comprehends3olab"></a>

Creates the foundation necessary to deploy the S3 Object Lambda Acceess Control Use Case.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ComprehendS3olab(scope: Construct, id: string, props: ComprehendS3olabProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ComprehendS3olabProps](#cdk-comprehend-s3olap-comprehends3olabprops)</code>)  *No description*
  * **accessControlLambdaConfig** (<code>[AccessConrtolLambdaProps](#cdk-comprehend-s3olap-accessconrtollambdaprops)</code>)  The parameters needed for the `ComprehendPiiAccessControlS3ObjectLambda` function. __*Optional*__
  * **adminRedactionLambdaConfig** (<code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code>)  The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `AdminRole`. __*Optional*__
  * **adminRoleConfig** (<code>[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)</code>)  The manageable properties for the administrator IAM role in the redaction case. __*Optional*__
  * **billingRedactionLambdaConfig** (<code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code>)  The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `BillingRole`. __*Optional*__
  * **billingRoleConfig** (<code>[BillingRoleProps](#cdk-comprehend-s3olap-billingroleprops)</code>)  The manageable properties for the billing IAM role in the redaction case. __*Optional*__
  * **cusrtSupportRedactionLambdaConfig** (<code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code>)  The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `CustSupportRole`. __*Optional*__
  * **custSupportRoleConfig** (<code>[CustSupportRoleProps](#cdk-comprehend-s3olap-custsupportroleprops)</code>)  The manageable properties for the customer support IAM role in the redaction case. __*Optional*__
  * **exampleFileDir** (<code>string</code>)  The directory path where `files/access_control/*.txt` and `files/redaction/*.txt` will be put. __*Default*__: __dirname
  * **generalRoleConfig** (<code>[GeneralRoleProps](#cdk-comprehend-s3olap-generalroleprops)</code>)  The manageable properties for the IAM role used to access the `survey-results.txt` data. __*Optional*__
  * **generateRandomCharacters** (<code>boolean</code>)  For distinguish test and normal deployment. __*Default*__: true
  * **s3AccessPointNames** (<code>[S3AccessPointNames](#cdk-comprehend-s3olap-s3accesspointnames)</code>)  The names of the S3 access points for the access control case and redaction case. __*Optional*__
  * **surveyBucketPrefix** (<code>string</code>)  The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the access control case. __*Default*__: 6 random words
  * **transcriptsBucketPrefix** (<code>string</code>)  The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the redaction case. __*Default*__: 6 random words



### Properties


Name | Type | Description 
-----|------|-------------
**adminLambdaArn** | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie administrator role in the redaction case.
**billingLambdaArn** | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie billing role in the redaction case.
**customerSupportLambdaArn** | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie customer support role in the redaction case.
**piiAccessConrtolLambdaArn** | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for the general case.
**s3objectLambdaAccessControlArn** | <code>string</code> | The ARN of the S3 Object Lambda for access control.
**s3objectLambdaAdminArn** | <code>string</code> | The ARN of the S3 Object Lambda for the admin role in the redaction case.
**s3objectLambdaBillingArn** | <code>string</code> | The ARN of the S3 Object Lambda for the billing role in the redaction case.
**s3objectLambdaCustomerSupportArn** | <code>string</code> | The ARN of the S3 Object Lambda for the customer support role in the redaction case.

### Methods


#### generateS3Prefix(length) <a id="cdk-comprehend-s3olap-comprehends3olab-generates3prefix"></a>



```ts
generateS3Prefix(length: number): string
```

* **length** (<code>number</code>)  *No description*

__Returns__:
* <code>string</code>



## class CustSupportRole  <a id="cdk-comprehend-s3olap-custsupportrole"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new CustSupportRole(scope: Construct, id: string, props?: AdminRoleProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)</code>)  *No description*
  * **iamRoleName** (<code>string</code>)  The name of the IAM role. __*Default*__: 'RedactionAdminRole'
  * **objectLambdaAccessPointName** (<code>string</code>)  The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. __*Default*__: 'admin-s3olap-call-transcripts-known-pii'
  * **policyName** (<code>string</code>)  The name of the IAM policy for the IAM role. __*Default*__: 'admin-role-s3olap-policy'



### Properties


Name | Type | Description 
-----|------|-------------
**roleArn** | <code>string</code> | The ARN of the IAM role.
**roleId** | <code>string</code> | The unique string identifying the role.
**roleName** | <code>string</code> | The name of the IAM role.



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



## class LambdaArnCaptorCustomResource  <a id="cdk-comprehend-s3olap-lambdaarncaptorcustomresource"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new LambdaArnCaptorCustomResource(scope: Construct, id: string, props: LambdaArnCaptorResourceProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[LambdaArnCaptorResourceProps](#cdk-comprehend-s3olap-lambdaarncaptorresourceprops)</code>)  *No description*
  * **partialLambdaName** (<code>string</code>)  The partial fixed name of the gemeral Lambda function created from the serverless application. 
  * **roleName** (<code>string</code>)  the name of the corresponding IAM role. 



### Properties


Name | Type | Description 
-----|------|-------------
**lambdaArn** | <code>string</code> | The ARN of the general Lambda function created from the serverless application.



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



## struct AdminRoleProps  <a id="cdk-comprehend-s3olap-adminroleprops"></a>






Name | Type | Description 
-----|------|-------------
**iamRoleName**? | <code>string</code> | The name of the IAM role.<br/>__*Default*__: 'RedactionAdminRole'
**objectLambdaAccessPointName**? | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.<br/>__*Default*__: 'admin-s3olap-call-transcripts-known-pii'
**policyName**? | <code>string</code> | The name of the IAM policy for the IAM role.<br/>__*Default*__: 'admin-role-s3olap-policy'



## struct BillingRoleProps  <a id="cdk-comprehend-s3olap-billingroleprops"></a>






Name | Type | Description 
-----|------|-------------
**iamRoleName**? | <code>string</code> | The name of the IAM role.<br/>__*Default*__: 'RedactionBillingRole'
**objectLambdaAccessPointName**? | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.<br/>__*Default*__: 'billing-s3olap-call-transcripts-known-pii'
**policyName**? | <code>string</code> | The name of the IAM policy for the IAM role.<br/>__*Default*__: 'billing-role-s3olap-policy'



## struct ComprehendS3olabProps  <a id="cdk-comprehend-s3olap-comprehends3olabprops"></a>






Name | Type | Description 
-----|------|-------------
**accessControlLambdaConfig**? | <code>[AccessConrtolLambdaProps](#cdk-comprehend-s3olap-accessconrtollambdaprops)</code> | The parameters needed for the `ComprehendPiiAccessControlS3ObjectLambda` function.<br/>__*Optional*__
**adminRedactionLambdaConfig**? | <code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `AdminRole`.<br/>__*Optional*__
**adminRoleConfig**? | <code>[AdminRoleProps](#cdk-comprehend-s3olap-adminroleprops)</code> | The manageable properties for the administrator IAM role in the redaction case.<br/>__*Optional*__
**billingRedactionLambdaConfig**? | <code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `BillingRole`.<br/>__*Optional*__
**billingRoleConfig**? | <code>[BillingRoleProps](#cdk-comprehend-s3olap-billingroleprops)</code> | The manageable properties for the billing IAM role in the redaction case.<br/>__*Optional*__
**cusrtSupportRedactionLambdaConfig**? | <code>[RedactionLambdaProps](#cdk-comprehend-s3olap-redactionlambdaprops)</code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `CustSupportRole`.<br/>__*Optional*__
**custSupportRoleConfig**? | <code>[CustSupportRoleProps](#cdk-comprehend-s3olap-custsupportroleprops)</code> | The manageable properties for the customer support IAM role in the redaction case.<br/>__*Optional*__
**exampleFileDir**? | <code>string</code> | The directory path where `files/access_control/*.txt` and `files/redaction/*.txt` will be put.<br/>__*Default*__: __dirname
**generalRoleConfig**? | <code>[GeneralRoleProps](#cdk-comprehend-s3olap-generalroleprops)</code> | The manageable properties for the IAM role used to access the `survey-results.txt` data.<br/>__*Optional*__
**generateRandomCharacters**? | <code>boolean</code> | For distinguish test and normal deployment.<br/>__*Default*__: true
**s3AccessPointNames**? | <code>[S3AccessPointNames](#cdk-comprehend-s3olap-s3accesspointnames)</code> | The names of the S3 access points for the access control case and redaction case.<br/>__*Optional*__
**surveyBucketPrefix**? | <code>string</code> | The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the access control case.<br/>__*Default*__: 6 random words
**transcriptsBucketPrefix**? | <code>string</code> | The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the redaction case.<br/>__*Default*__: 6 random words



## struct CustSupportRoleProps  <a id="cdk-comprehend-s3olap-custsupportroleprops"></a>






Name | Type | Description 
-----|------|-------------
**iamRoleName**? | <code>string</code> | The name of the IAM role.<br/>__*Default*__: 'RedactionCustSupportRole'
**objectLambdaAccessPointName**? | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.<br/>__*Default*__: 'custsupport-s3olap-call-transcripts-known-pii'
**policyName**? | <code>string</code> | The name of the IAM policy for the IAM role.<br/>__*Default*__: 'customersupport-role-s3olap-policy'



## struct GeneralRoleProps  <a id="cdk-comprehend-s3olap-generalroleprops"></a>






Name | Type | Description 
-----|------|-------------
**iamRoleName**? | <code>string</code> | The name of the IAM role.<br/>__*Default*__: 'GeneralRole'
**objectLambdaAccessPointName**? | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.<br/>__*Default*__: 'accessctl-s3olap-survey-results-unknown-pii'
**policyName**? | <code>string</code> | The name of the IAM policy for the IAM role.<br/>__*Default*__: 'general-role-s3olap-policy'



## struct LambdaArnCaptorResourceProps  <a id="cdk-comprehend-s3olap-lambdaarncaptorresourceprops"></a>






Name | Type | Description 
-----|------|-------------
**partialLambdaName** | <code>string</code> | The partial fixed name of the gemeral Lambda function created from the serverless application.
**roleName** | <code>string</code> | the name of the corresponding IAM role.



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



## struct S3AccessPointNames  <a id="cdk-comprehend-s3olap-s3accesspointnames"></a>






Name | Type | Description 
-----|------|-------------
**admin** | <code>string</code> | The name of the S3 aceess point for the admin role in the redaction case.
**billing** | <code>string</code> | The name of the S3 aceess point for the billing role in the redaction case.
**customerSupport** | <code>string</code> | The name of the S3 aceess point for the customer support role in the redaction case.
**general** | <code>string</code> | The name of the S3 aceess point for the general role in the access control case.



## enum IamRoleName  <a id="cdk-comprehend-s3olap-iamrolename"></a>



Name | Description
-----|-----
**GENERAL** |
**ADMIN** |
**BILLING** |
**CUST_SUPPORT** |


