import { SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
// import { IamRole } from '../src/cdk-iam-roles';
import '@aws-cdk/assert/jest';

test('IAM role test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ker-ker');


  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  // expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::IAM::Role', 2);
});