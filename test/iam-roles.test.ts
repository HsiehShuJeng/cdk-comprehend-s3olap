import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GeneralRole, AdminRole, BillingRole, CustSupportRole } from '../src/iam-roles';

test('IAM roles test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'DummyStack');
  new GeneralRole(stack, 'GeneralRole', {});
  new AdminRole(stack, 'AdminRole');
  new BillingRole(stack, 'BillingRole');
  new CustSupportRole(stack, 'CustSupportRole');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::IAM::Role', 4);
  template.hasResourceProperties('AWS::IAM::Role', {
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
  template.hasResourceProperties('AWS::IAM::Role', {
    RoleName: 'RedactionAdminRole',
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
                    ':accesspoint/admin-s3olap-call-transcripts-known-pii',
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
        PolicyName: 'admin-role-s3olap-policy',
      },
    ],
  });
  template.hasResourceProperties('AWS::IAM::Role', {
    RoleName: 'RedactionBillingRole',
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
                    ':accesspoint/billing-s3olap-call-transcripts-known-pii',
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
        PolicyName: 'billing-role-s3olap-policy',
      },
    ],
  });
  template.hasResourceProperties('AWS::IAM::Role', {
    RoleName: 'RedactionCustSupportRole',
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
                    ':accesspoint/custsupport-s3olap-call-transcripts-known-pii',
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
        PolicyName: 'customersupport-role-s3olap-policy',
      },
    ],
  });
});