# cdk-comprehend-s3olap
This construct creates the foundation for developers to explore the combination of Amazon S3 Object Lambda and Amazon Comprehend for PII scenarios and it is designed with flexibility, i.e, the developers could tweak arguments via CDK to see how AWS services work and behave.  

[![License](https://img.shields.io/badge/License-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)  
[![Current cdk version](https://img.shields.io/github/package-json/dependency-version/HsiehShuJeng/cdk-comprehend-s3olap/@aws-cdk/core)](https://github.com/aws/aws-cdk)  
[![Build](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/actions/workflows/build.yml/badge.svg)](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/actions/workflows/build.yml) [![Release](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/workflows/Release/badge.svg)](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/actions/workflows/release.yml)  
[![Python](https://img.shields.io/pypi/pyversions/cdk-comprehend-s3olap)](https://pypi.org) [![pip](https://img.shields.io/badge/pip%20install-cdk--comprehend--s3olap-blue)](https://pypi.org/project/cdk-comprehend-s3olap/)  
[![npm version](https://img.shields.io/npm/v/cdk-comprehend-s3olap)](https://www.npmjs.com/package/cdk-comprehend-s3olap) [![pypi version](https://img.shields.io/pypi/v/cdk-comprehend-s3olap)](https://pypi.org/project/cdk-comprehend-s3olap/) [![Maven](https://img.shields.io/maven-central/v/io.github.hsiehshujeng/cdk-comprehend-s3olap)](https://search.maven.org/search?q=a:cdk-comprehend-s3olap) [![nuget](https://img.shields.io/nuget/v/Comprehend.S3olap)](https://www.nuget.org/packages/Comprehend.S3olap/)

# Table of Contents  
- [Serverless Architecture](#serverless-architecture)  
  - [Access Control](#access-control)  
  - [Redaction](#rerfaction)  
- [Introduction](#introduction)  
- [Example](#example)  
  - [Typescript](#typescript)  
  - [Python](#python)  
  - [Java](#java)  
  - [C#](#c)  
- [Some Notes](#some-notes)  

# Serverless Architecture    
## Access Control  
**Data Flow**   
![image](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/05/07/1-2891.jpg)  
*Ram R. and Austin Q., 2021*  
**Arhictecture**   
![image](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/05/07/2-2891.jpg)  
*Ram R. and Austin Q., 2021*  
## Redaction  
![image](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/05/07/3-2891.jpg)  
*Ram R. and Austin Q., 2021*  
![image](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/05/07/4-2891.jpg)  
*Ram R. and Austin Q., 2021*  
  
# Introduction  
The architecture was introduced by **Ram Ramani** and **Austin Quam** and was posted on the AWS Blog as [*Protect PII using Amazon S3 Object Lambda to process and modify data during retrieval*](https://aws.amazon.com/tw/blogs/machine-learning/protect-pii-using-amazon-s3-object-lambda-to-process-and-modify-data-during-retrieval/).  
I converted the architecture into a CDK constrcut for 4 programming languages. With this construct, you could manage the properties of IAM roles, the Lambda functions with Amazon Comprehend, and few for the constrcut.  
Before deploying the construct via the CDK, you could either places the text files, i.e., those for the access control case and redaction case, under a directory with a specific name as the following or just deploying directly yet you need to upload the text files onto the S3 buckets manually yourself. It's all your choie.  
```bash
# For the access control case.
$ cd ${ROOT_DIRECTORY_CDK_APPLICATION}
$ mkdir -p files/access_control  
$ curl -o survey-results.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/access-control/survey-results.txt
$ curl -o innocuous.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/access-control/innocuous.txt
# For the redaction case.
$ cd ${ROOT_DIRECTORY_CDK_APPLICATION}
$ mkdir -p files/redaction
$ curl -o transcript.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/redaction/transcript.txt
```  
# Example  
## Typescript   
You could also refer to [here](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/tree/main/src/demo/typescript).    
```bash
$ cdk --init language typescript
$ yarn add cdk-comprehend-s3olap
```  
```typescript
import * as cdk from '@aws-cdk/core';
import { ComprehendS3olab } from 'cdk-comprehend-s3olap';

class TypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const s3olab = new ComprehendS3olab(this, 'PiiDemo', {
      adminRedactionLambdaConfig: {
        maskCharacter: ' ',
        unsupportedFileHandling: 'PASS',
      },
      billingRedactionLambdaConfig: {
        maskMode: 'REPLACE_WITH_PII_ENTITY_TYPE',
        piiEntityTypes: 'AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN',
      },
      cusrtSupportRedactionLambdaConfig: {
        maskMode: 'REPLACE_WITH_PII_ENTITY_TYPE',
        piiEntityTypes: ' BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN',
      },
    });

    new cdk.CfnOutput(this, 'OPiiAccessControlLambdaArn', { value: s3olab.piiAccessConrtolLambdaArn });
    new cdk.CfnOutput(this, 'OAdminLambdaArn', { value: s3olab.adminLambdaArn });
    new cdk.CfnOutput(this, 'OBillingLambdaArn', { value: s3olab.billingLambdaArn });
    new cdk.CfnOutput(this, 'OCustomerSupportLambdaArn', { value: s3olab.customerSupportLambdaArn });
    new cdk.CfnOutput(this, 'OS3ObjectLambdaGeneralArn', { value: s3olab.s3objectLambdaAccessControlArn });
    new cdk.CfnOutput(this, 'OS3ObjectLambdaAdminArn', { value: s3olab.s3objectLambdaAdminArn });
    new cdk.CfnOutput(this, 'OS3ObjectLambdaBillingArn', { value: s3olab.s3objectLambdaBillingArn });
    new cdk.CfnOutput(this, 'OS3ObjectLambdaCustomerSupportArn', { value: s3olab.customerSupportLambdaArn });
  }
}

const app = new cdk.App();
new TypescriptStack(app, 'TypescriptStack', {
  stackName: 'Comprehend-S3olap',
});
```  
## Python  
TBD  
## Java  
TBD
## C#  
TBD

# Some Notes  
1. You should see similar items as the following diagram displays after deploying the constrcut.  
![image](https://raw.githubusercontent.com/HsiehShuJeng/cdk-comprehend-s3olap/main/images/s3olap_console.png)   
2. After creating the foundation with success, you could switch roles that the consrtcut creates for you and see how Amazon S3 Object Lambda works.  
![image](https://raw.githubusercontent.com/HsiehShuJeng/cdk-comprehend-s3olap/main/images/switch_roles.png)  
3. You explore Amazon S3 Object Lambda through the Object Lambda access points and open or download the text files.  
4. Lambda code that incorporates with Amazon Comprehend could be see [here](https://github.com/aws-samples/amazon-comprehend-examples/tree/master/s3_object_lambda_pii_protection_blog).  