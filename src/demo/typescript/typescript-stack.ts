#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ComprehendS3olab } from '../../cdk-comprehend-s3olap';

class TypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const s3olab = new ComprehendS3olab(this, 'ComprehendS3olab', {});

    new cdk.CfnOutput(this, 'OLambdaArn', { value: s3olab.piiAccessConrtolLambdaArn });
    // new cdk.CfnOutput(this, 'OS3ObjectLambdaArn', { value: s3olab.s3objectLambdaAccessControlArn });
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