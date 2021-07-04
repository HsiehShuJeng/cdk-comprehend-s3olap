import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { GeneralRole } from '../src/iam-roles';

test('IAM roles test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'DummyStack');
  new GeneralRole(stack, 'GeneralRole', {});

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::IAM::Role', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::IAM::Role', {
    RoleName: 'GeneralRole',
    AssumeRolePolicyDocument: {
      Statement: [
        {
          Action: 'sts:AssumeRole',
          Effect: 'Allow',
          Principal: {
            AWS: {
              'Fn::Join': [
                '',
                [
                  'arn:',
                  {
                    Ref: 'AWS::Partition',
                  },
                  ':iam::',
                  {
                    Ref: 'AWS::AccountId',
                  },
                  ':root',
                ],
              ],
            },
          },
        },
      ],
      Version: '2012-10-17',
    },
    Policies: [
      {
        PolicyDocument: {
          Statement: [
            {
              Action: 's3:ListBucket',
              Effect: 'Allow',
              Resource: '*',
              Sid: 'AllowListingObjects',
            },
            {
              Action: [
                's3:GetAccessPointForObjectLambda',
                's3:GetAccessPointConfigurationForObjectLambda',
                's3:ListAccessPointsForObjectLambda',
                's3:ListAllMyBuckets',
                's3:ListAccessPoints',
                's3:GetAccessPoint',
                's3:GetAccountPublicAccessBlock',
                's3:GetBucketPublicAccessBlock',
                's3:GetBucketPolicyStatus',
                's3:GetBucketAcl',
                's3:GetAccessPointPolicyStatus',
              ],
              Effect: 'Allow',
              Resource: '*',
              Sid: 'AllowListingBucketsAndAccessPoints',
            },
            {
              Action: [
                's3-object-lambda:Get*',
                's3-object-lambda:List*',
              ],
              Effect: 'Allow',
              Resource: {
                'Fn::Join': [
                  '',
                  [
                    'arn:',
                    {
                      Ref: 'AWS::Partition',
                    },
                    ':s3-object-lambda:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    ':accesspoint/accessctl-s3olap-survey-results-unknown-pii',
                  ],
                ],
              },
              Sid: 'AllowObjectLambdaAccess',
            },
            {
              Action: [
                's3:Get*',
                's3:List*',
              ],
              Condition: {
                'ForAnyValue:StringEquals': {
                  'aws:CalledVia': [
                    's3-object-lambda.amazonaws.com',
                  ],
                },
              },
              Effect: 'Allow',
              Resource: '*',
              Sid: 'AllowStandardAccessPointAccess',
            },
            {
              Action: 'lambda:InvokeFunction',
              Condition: {
                'ForAnyValue:StringEquals': {
                  'aws:CalledVia': [
                    's3-object-lambda.amazonaws.com',
                  ],
                },
              },
              Effect: 'Allow',
              Resource: '*',
              Sid: 'AllowLambdaInvocation',
            },
          ],
          Version: '2012-10-17',
        },
        PolicyName: 'general-role-s3olap-policy',
      },
    ],
  });
});