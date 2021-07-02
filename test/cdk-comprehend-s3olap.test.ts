import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { ServerlessApp } from '../src/cdk-comprehend-s3olap';

test('IAM role test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ker-ker');


  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  // expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::IAM::Role', 2);
});