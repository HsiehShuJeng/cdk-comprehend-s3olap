import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { ComprehendS3olab } from '../src/cdk-comprehend-s3olap';

test('IAM role test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ker-ker');
  new ComprehendS3olab(stack, 'ComprehendS3olab', {});


  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::Serverless::Application', 1);


  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::IAM::Role', 5);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::IAM::Role', {
    AssumeRolePolicyDocument: {
      Statement: [
        {
          Action: 'sts:AssumeRole',
          Effect: 'Allow',
          Principal: {
            Service: 'lambda.amazonaws.com',
          },
        },
      ],
      Version: '2012-10-17',
    },
    ManagedPolicyArns: [
      {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
          ],
        ],
      },
      {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            ':iam::aws:policy/AWSXRayDaemonWriteAccess',
          ],
        ],
      },
    ],
    Policies: [
      {
        PolicyDocument: {
          Statement: [
            {
              Action: 'lambda:ListFunctions',
              Effect: 'Allow',
              Resource: '*',
              Sid: 'ListLambdaPermissions',
            },
            {
              Action: [
                'lambda:GetFunction',
                'lambda:InvokeFunction',
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
                    ':lambda:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    ':function:*',
                  ],
                ],
              },
              Sid: 'GetLambdaFunctionsPermissions',
            },
          ],
          Version: '2012-10-17',
        },
        PolicyName: 'ComprehendS3ObjectLambdaCustomResourcePolicy',
      },
    ],
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::IAM::Policy', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::IAM::Policy', {
    PolicyName: 'LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8aServiceRoleDefaultPolicyADDA7DEB',
    PolicyDocument: {
      Statement: [
        {
          Action: [
            'logs:PutRetentionPolicy',
            'logs:DeleteRetentionPolicy',
          ],
          Effect: 'Allow',
          Resource: '*',
        },
      ],
      Version: '2012-10-17',
    },
    Roles: [
      {
        Ref: 'LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8aServiceRole9741ECFB',
      },
    ],
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::Lambda::Function', 5);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Lambda::Function', {
    Code: {
      S3Bucket: {
        Ref: 'AssetParameters43079f879513e0d85eeb42ddfe71e5ead66edf1ee02c33bb165d7c2f926030c4S3Bucket3A2B0B46',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters43079f879513e0d85eeb42ddfe71e5ead66edf1ee02c33bb165d7c2f926030c4S3VersionKey7A50E10B',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters43079f879513e0d85eeb42ddfe71e5ead66edf1ee02c33bb165d7c2f926030c4S3VersionKey7A50E10B',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Timeout: 900,
    MemorySize: 128,
    Handler: '__entrypoint__.handler',
    Role: {
      'Fn::GetAtt': [
        'AWSCDKCfnUtilsProviderCustomResourceProviderRoleFE0EE867',
        'Arn',
      ],
    },
    Runtime: 'nodejs12.x',
  });
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Runtime: 'nodejs14.x',
    Code: {
      S3Bucket: {
        Ref: 'AssetParameters67b7823b74bc135986aa72f889d6a8da058d0c4a20cbc2dfc6f78995fdd2fc24S3Bucket4D46ABB5',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters67b7823b74bc135986aa72f889d6a8da058d0c4a20cbc2dfc6f78995fdd2fc24S3VersionKeyB0F28861',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters67b7823b74bc135986aa72f889d6a8da058d0c4a20cbc2dfc6f78995fdd2fc24S3VersionKeyB0F28861',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Role: {
      'Fn::GetAtt': [
        'LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8aServiceRole9741ECFB',
        'Arn',
      ],
    },
  });
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Lambda::Function', {
    Code: {
      S3Bucket: {
        Ref: 'AssetParameters4cd61014b71160e8c66fe167e43710d5ba068b80b134e9bd84508cf9238b2392S3BucketBF7A7F3F',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters4cd61014b71160e8c66fe167e43710d5ba068b80b134e9bd84508cf9238b2392S3VersionKeyFAF93626',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters4cd61014b71160e8c66fe167e43710d5ba068b80b134e9bd84508cf9238b2392S3VersionKeyFAF93626',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Timeout: 900,
    MemorySize: 128,
    Handler: '__entrypoint__.handler',
    Role: {
      'Fn::GetAtt': [
        'CustomS3AutoDeleteObjectsCustomResourceProviderRole3B1BD092',
        'Arn',
      ],
    },
    Runtime: 'nodejs12.x',
    Description: {
      'Fn::Join': [
        '',
        [
          'Lambda function for auto-deleting objects in ',
          {
            Ref: 'ComprehendS3olabSurveyResultBucketAED4B852',
          },
          ' S3 bucket.',
        ],
      ],
    },
  });
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Lambda::Function', {
    Code: {
      S3Bucket: {
        Ref: 'AssetParametersc691172cdeefa2c91b5a2907f9d81118e47597634943344795f1a844192dd49cS3BucketEAC9DD43',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParametersc691172cdeefa2c91b5a2907f9d81118e47597634943344795f1a844192dd49cS3VersionKeyDD9AE9E7',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParametersc691172cdeefa2c91b5a2907f9d81118e47597634943344795f1a844192dd49cS3VersionKeyDD9AE9E7',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Role: {
      'Fn::GetAtt': [
        'ComprehendS3olabLambdaArnCaptorCustomResourceRoleFA19C041',
        'Arn',
      ],
    },
    Description: 'AWS CDK resource provider framework - onEvent (ker-ker/ComprehendS3olab/LambdaArnCaptor/Provider)',
    Environment: {
      Variables: {
        USER_ON_EVENT_FUNCTION_ARN: {
          'Fn::GetAtt': [
            'ComprehendS3olabLambdaArnCaptorLambdaArnExpertB9231BFC',
            'Arn',
          ],
        },
      },
    },
    Handler: 'framework.onEvent',
    Runtime: 'nodejs14.x',
    Timeout: 900,
  });
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::Lambda::Function', {
    Code: {
      S3Bucket: {
        Ref: 'AssetParameters9c4f86274e87ed34a50dba5d78bc94a321f082416dc3becda73906d6e392893bS3Bucket6BF99F8D',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters9c4f86274e87ed34a50dba5d78bc94a321f082416dc3becda73906d6e392893bS3VersionKey89DE1382',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameters9c4f86274e87ed34a50dba5d78bc94a321f082416dc3becda73906d6e392893bS3VersionKey89DE1382',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Role: {
      'Fn::GetAtt': [
        'ComprehendS3olabLambdaArnCaptorCustomResourceRoleFA19C041',
        'Arn',
      ],
    },
    Description: 'A Lambda function that gets the ARN of `PiiAccessControlFunction`',
    Environment: {
      Variables: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      },
    },
    Handler: 'index.lambdaHandler',
    Runtime: 'nodejs14.x',
    Timeout: 120,
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::S3::Bucket', 1);
  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::S3::BucketPolicy', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::S3::BucketPolicy', {
    Bucket: {
      Ref: 'ComprehendS3olabSurveyResultBucketAED4B852',
    },
    PolicyDocument: {
      Statement: [
        {
          Action: [
            's3:GetBucket*',
            's3:List*',
            's3:DeleteObject*',
          ],
          Effect: 'Allow',
          Principal: {
            AWS: {
              'Fn::GetAtt': [
                'CustomS3AutoDeleteObjectsCustomResourceProviderRole3B1BD092',
                'Arn',
              ],
            },
          },
          Resource: [
            {
              'Fn::GetAtt': [
                'ComprehendS3olabSurveyResultBucketAED4B852',
                'Arn',
              ],
            },
            {
              'Fn::Join': [
                '',
                [
                  {
                    'Fn::GetAtt': [
                      'ComprehendS3olabSurveyResultBucketAED4B852',
                      'Arn',
                    ],
                  },
                  '/*',
                ],
              ],
            },
          ],
        },
        {
          Action: 's3:GetObject',
          Condition: {
            StringEquals: {
              's3:DataAccessPointAccount': {
                Ref: 'AWS::AccountId',
              },
            },
          },
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
          Resource: {
            'Fn::Join': [
              '',
              [
                {
                  'Fn::GetAtt': [
                    'ComprehendS3olabSurveyResultBucketAED4B852',
                    'Arn',
                  ],
                },
                '/*',
              ],
            ],
          },
          Sid: 'AWSBucketGetPolicy',
        },
        {
          Action: 's3:PutObject',
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
          Resource: {
            'Fn::Join': [
              '',
              [
                {
                  'Fn::GetAtt': [
                    'ComprehendS3olabSurveyResultBucketAED4B852',
                    'Arn',
                  ],
                },
                '/*',
              ],
            ],
          },
          Sid: 'AWSBucketPutPolicy',
        },
      ],
      Version: '2012-10-17',
    },
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::S3::AccessPoint', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::S3::AccessPoint', {
    Bucket: {
      Ref: 'ComprehendS3olabSurveyResultBucketAED4B852',
    },
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::S3ObjectLambda::AccessPoint', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResourceLike('AWS::S3ObjectLambda::AccessPoint', {
    Name: 'accessctl-s3olap-survey-results-unknown-pii',
    ObjectLambdaConfiguration: {
      TransformationConfigurations: [
        {
          Actions: [
            'GetObject',
          ],
          ContentTransformation: {
            'Fn::GetAtt': [
              'ComprehendS3olabObjectLambdaConfig96E4FB6D',
              'Value',
            ],
          },
        },
      ],
    },
  });

  expect(SynthUtils.toCloudFormation(stack)).toCountResources('AWS::CloudFormation::CustomResource', 1);
  expect(SynthUtils.toCloudFormation(stack)).toHaveResource('AWS::CloudFormation::CustomResource', {
    ServiceToken: {
      'Fn::GetAtt': [
        'ComprehendS3olabLambdaArnCaptorProviderframeworkonEvent2B52715F',
        'Arn',
      ],
    },
    LambdaFixedName: 'PiiAccessControlFunction',
  });

});