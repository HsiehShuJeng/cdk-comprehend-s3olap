#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ComprehendS3olab } from '../../cdk-comprehend-s3olap';

class TypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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
  /* If you don't specify 'env', this stack will be environment-agnostic.
           * Account/Region-dependent features and context lookups will not work,
           * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
           * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
           * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});