# cdk-comprehend-s3olap  
[![License](https://img.shields.io/badge/License-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0) [![Release](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/actions/workflows/release.yml/badge.svg)](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/actions/workflows/release.yml) [![npm downloads](https://img.shields.io/npm/dt/cdk-comprehend-s3olap?label=npm%20downloads&style=plastic)](https://img.shields.io/npm/dt/cdk-comprehend-s3olap?label=npm%20downloads&style=plastic) [![pypi downloads](https://img.shields.io/pypi/dm/cdk-comprehend-s3olap?label=pypi%20downloads&style=plastic)](https://img.shields.io/pypi/dm/cdk-comprehend-s3olap?label=pypi%20downloads&style=plastic) [![NuGet downloads](https://img.shields.io/nuget/dt/Comprehend.S3olap?label=NuGet%20downloads&style=plastic)](https://img.shields.io/nuget/dt/Comprehend.S3olap?label=NuGet%20downloads&style=plastic) [![repo languages](https://img.shields.io/github/languages/count/HsiehShuJeng/cdk-comprehend-s3olap?label=repo%20languages&style=plastic)](https://img.shields.io/github/languages/count/HsiehShuJeng/cdk-comprehend-s3olap?label=repo%20languages&style=plastic)  

| npm (JS/TS) | PyPI (Python) | Maven (Java) | Go | NuGet |
| --- | --- | --- | --- | --- |
| [Link](https://www.npmjs.com/package/cdk-comprehend-s3olap) | [Link](https://pypi.org/project/cdk_comprehend_s3olap/) | [Link](https://search.maven.org/artifact/io.github.hsiehshujeng/cdk-comprehend-s3olap) | [Link](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap-go) | [Link](https://www.nuget.org/packages/Comprehend.S3olap/) |   

This construct creates the foundation for developers to explore the combination of Amazon S3 Object Lambda and Amazon Comprehend for PII scenarios and it is designed with flexibility, i.e, the developers could tweak arguments via CDK to see how AWS services work and behave.  

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
You could also refer to [here](https://github.com/HsiehShuJeng/cdk-databrew-cicd/tree/main/src/demo/python).   
```bash
# upgrading related Python packages
$ python -m ensurepip --upgrade
$ python -m pip install --upgrade pip
$ python -m pip install --upgrade virtualenv
# initialize a CDK Python project
$ cdk init --language python
# make packages installed locally instead of globally
$ source .venv/bin/activate
$ # add "cdk-comprehend-s3olap==2.0.113" into `setup.py`
$ python -m pip install --upgrade -r requirements.txt
```  
The demonstration sample code of Python can be viewed via the Python tab of this package on the [Constrcut Hub](https://constructs.dev/).  
## Java  
You could also refer to [here](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/tree/main/src/demo/java).  
```bash
$ cdk init --language java
$ mvn package # If you include the construct, you need to tweak the test case for Java in order to package with success via Maven.
```xml
.
.
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <cdk.version>2.72.1</cdk.version>
    <constrcut.verion>2.0.113</constrcut.verion>
    <junit.version>5.7.1</junit.version>
</properties>
.
.
<dependencies>
    <!-- AWS Cloud Development Kit -->
    <dependency>
        <groupId>software.amazon.awscdk</groupId>
        <artifactId>core</artifactId>
        <version>${cdk.version}</version>
    </dependency>
    <dependency>
        <groupId>io.github.hsiehshujeng</groupId>
        <artifactId>cdk-comprehend-s3olap</artifactId>
        <version>${constrcut.verion}</version>
    </dependency>
    .
    .
    .
</dependencies>
```
```java
package com.myorg;

import software.amazon.awscdk.core.CfnOutput;
import software.amazon.awscdk.core.CfnOutputProps;
import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.Stack;
import software.amazon.awscdk.core.StackProps;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.RedactionLambdaProps;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.ComprehendS3olab;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.ComprehendS3olabProps;

public class JavaStack extends Stack {
    public JavaStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public JavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        ComprehendS3olab s3olab = new ComprehendS3olab(this, "PiiDemo", ComprehendS3olabProps.builder()
            .adminRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                    .maskCharacter(" ")
                    .unsupportedFileHandling("PASS").build())
            .billingRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                    .maskMode("REPLACE_WITH_PII_ENTITY_TYPE")
                    .piiEntityTypes("AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN")
                    .build())
            .cusrtSupportRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                .maskMode("REPLACE_WITH_PII_ENTITY_TYPE")
                .piiEntityTypes("BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN")
                .build())
            .exampleFileDir("/opt/learning/cdk-comprehend-s3olap/src/demo/java")
            .build()
            );
      
          new CfnOutput(this, "OPiiAccessControlLambdaArn", CfnOutputProps.builder().value(s3olab.getPiiAccessConrtolLambdaArn()).build());
          new CfnOutput(this, "OAdminLambdaArn", CfnOutputProps.builder().value(s3olab.getAdminLambdaArn()).build());
          new CfnOutput(this, "OBillingLambdaArn", CfnOutputProps.builder().value(s3olab.getBillingLambdaArn()).build());
          new CfnOutput(this, "OCustomerSupportLambdaArn", CfnOutputProps.builder().value(s3olab.getCustomerSupportLambdaArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaGeneralArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaAccessControlArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaAdminArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaAdminArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaBillingArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaBillingArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaCustomerSupportArn", CfnOutputProps.builder().value(s3olab.getCustomerSupportLambdaArn()).build());
    }
}
```
## C#  
You could also refer to [here](https://github.com/HsiehShuJeng/cdk-comprehend-s3olap/tree/main/src/demo/csharp).  
```bash
$ cdk init --language csharp
$ dotnet add src/Csharp package Comprehend.S3olap --version 2.0.113
```
```cs
using Amazon.CDK;
using ScottHsieh.Cdk;

namespace Csharp
{
    public class CsharpStack : Stack
    {
        internal CsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            var S3olab = new ComprehendS3olab(this, "PiiDemo", new ComprehendS3olabProps
            {
                AdminRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskCharacter = " ",
                    UnsupportedFileHandling = "PASS"
                },
                BillingRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskMode = "REPLACE_WITH_PII_ENTITY_TYPE",
                    PiiEntityTypes = "AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN"
                },
                CusrtSupportRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskMode = "REPLACE_WITH_PII_ENTITY_TYPE",
                    PiiEntityTypes = "BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN"
                },
                ExampleFileDir = "/opt/learning/cdk-comprehend-s3olap/src/demo/csharp"
            });

            new CfnOutput(this, "OPiiAccessControlLambdaArn", new CfnOutputProps { Value = S3olab.PiiAccessConrtolLambdaArn });
            new CfnOutput(this, "OAdminLambdaArn", new CfnOutputProps { Value = S3olab.AdminLambdaArn });
            new CfnOutput(this, "OBillingLambdaArn", new CfnOutputProps { Value = S3olab.BillingLambdaArn });
            new CfnOutput(this, "OCustomerSupportLambdaArn", new CfnOutputProps { Value = S3olab.CustomerSupportLambdaArn });
            new CfnOutput(this, "OS3ObjectLambdaGeneralArn", new CfnOutputProps { Value = S3olab.S3objectLambdaAccessControlArn });
            new CfnOutput(this, "OS3ObjectLambdaAdminArn", new CfnOutputProps { Value = S3olab.S3objectLambdaAdminArn });
            new CfnOutput(this, "OS3ObjectLambdaBillingArn", new CfnOutputProps { Value = S3olab.S3objectLambdaBillingArn });
            new CfnOutput(this, "OS3ObjectLambdaCustomerSupportArn", new CfnOutputProps { Value = S3olab.CustomerSupportLambdaArn });
        }
    }
}
```

# Some Notes  
1. You should see similar items as the following diagram displays after deploying the constrcut.  
![image](https://raw.githubusercontent.com/HsiehShuJeng/cdk-comprehend-s3olap/main/images/s3olap_console.png)   
2. After creating the foundation with success, you could switch roles that the consrtcut creates for you and see how **Amazon S3 Object Lambda** works. For what switching roles is, please refer to [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-console.html) for the detail.    
![image](https://raw.githubusercontent.com/HsiehShuJeng/cdk-comprehend-s3olap/main/images/switch_roles.png)  
3. You explore **Amazon S3 Object Lambda** through the Object Lambda access points on the AWS Console and open or download the text files via one of the IAM roles.    
4. Lambda code that incorporates with **Amazon Comprehend** could be see [here](https://github.com/aws-samples/amazon-comprehend-examples/tree/master/s3_object_lambda_pii_protection_blog).  