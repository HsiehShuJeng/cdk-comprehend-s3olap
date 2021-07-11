import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { AccessConrtolLambda } from '../src/comprehend-lambdas';

test('Comprehend Lambda test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ker-ker');
  new AccessConrtolLambda(stack, 'AccessControlLambda', {});


  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::Serverless::Application', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Serverless::Application', {
    Location: {
      ApplicationId: 'arn:aws:serverlessrepo:us-east-1:839782855223:applications/ComprehendPiiAccessControlS3ObjectLambda',
      SemanticVersion: '1.0.2',
    },
    Parameters: {
      ConfidenceThreshold: '0.5',
      ContainsPiiEntitiesThreadCount: '20',
      DefaultLanguageCode: 'en',
      DocumentMaxSize: '102400',
      DocumentMaxSizeContainsPiiEntities: '50000',
      IsPartialObjectSupported: 'false',
      LogLevel: 'INFO',
      MaxCharsOverlap: '200',
      PiiEntityTypes: 'ALL',
      PublishCloudWatchMetrics: 'true',
      SubsegmentOverlappingTokens: '20',
      UnsupportedFileHandling: 'FAIL',
    },
  });
});