import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
// import { ComprehendS3olab } from '../src/cdk-comprehend-s3olap';

test('IAM role test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ker-ker');
  // new ComprehendS3olab(stack, 'ComprehendS3olab', {});


  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::Serverless::Application', 0);
});