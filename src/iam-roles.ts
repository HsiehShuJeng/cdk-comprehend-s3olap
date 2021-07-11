import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

export interface GeneralRoleProps {
  /**
   * The name of the IAM policy for the IAM role.
   *
   * @default 'general-role-s3olap-policy'
   */
  readonly policyName?: string;
  /**
     * The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.
     *
     * @default 'accessctl-s3olap-survey-results-unknown-pii'
     */
  readonly objectLambdaAccessPointName?: string;
  /**
     * The name of the IAM role.
     *
     * @default 'GeneralRole'
     */
  readonly iamRoleName?: string;
}

/**
 * The role that you are going to assume (switch role)
 *
 * Explores how the S3 Object Lambda works.
 */
export class GeneralRole extends cdk.Construct {
  /**
     * The ARN of the IAM role.
     *
     */
  public readonly roleArn: string;
  /**
     * The name of the IAM role.
     *
     */
  public readonly roleName: string;
  /**
     * The unique string identifying the role.
     *
     */
  public readonly roleId: string;
  constructor(scope: cdk.Construct, id: string, props: GeneralRoleProps) {
    super(scope, id);
    const policyName = props.policyName ?? 'general-role-s3olap-policy';
    const objectLambdaAccessPointName = props.objectLambdaAccessPointName ?? 'accessctl-s3olap-survey-results-unknown-pii';
    const iamRoleName = props.iamRoleName ?? 'GeneralRole';
    const generalRole = new iam.Role(this, 'IamRole', {
      roleName: iamRoleName,
      assumedBy: new iam.AccountRootPrincipal(),
      inlinePolicies: {
        [policyName]: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'AllowListingObjects',
              effect: iam.Effect.ALLOW,
              actions: ['s3:ListBucket'],
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowListingBucketsAndAccessPoints',
              effect: iam.Effect.ALLOW,
              actions: [
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
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowObjectLambdaAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3-object-lambda:Get*',
                's3-object-lambda:List*',
              ],
              resources: [`arn:${cdk.Aws.PARTITION}:s3-object-lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${objectLambdaAccessPointName}`],
            }),
            new iam.PolicyStatement({
              sid: 'AllowStandardAccessPointAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3:Get*',
                's3:List*',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowLambdaInvocation',
              effect: iam.Effect.ALLOW,
              actions: [
                'lambda:InvokeFunction',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
          ],
        }),
      },
    });
    this.roleArn = generalRole.roleArn;
    this.roleName = generalRole.roleName;
    this.roleId = generalRole.roleId;
  }
}


export interface AdminRoleProps {
  /**
   * The name of the IAM policy for the IAM role.
   *
   * @default 'admin-role-s3olap-policy'
   */
  readonly policyName?: string;
  /**
   * The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.
   *
   * @default 'admin-s3olap-call-transcripts-known-pii'
   */
  readonly objectLambdaAccessPointName?: string;
  /**
   * The name of the IAM role.
   *
   * @default 'RedactionAdminRole'
   */
  readonly iamRoleName?: string;
}

export class AdminRole extends cdk.Construct {
  /**
   * The ARN of the IAM role.
   */
  public readonly roleArn: string;
  /**
   * The name of the IAM role.
   */
  public readonly roleName: string;
  /**
   * The unique string identifying the role.
   */
  public readonly roleId: string;
  constructor(scope: cdk.Construct, id: string, props?: AdminRoleProps) {
    super(scope, id);
    const policyName = props?.policyName ?? 'admin-role-s3olap-policy';
    const objectLambdaAccessPointName = props?.objectLambdaAccessPointName ?? 'admin-s3olap-call-transcripts-known-pii';
    const iamRoleName = props?.iamRoleName ?? 'RedactionAdminRole';
    const adminRole = new iam.Role(this, 'RedactionAdminRole', {
      roleName: iamRoleName,
      assumedBy: new iam.AccountRootPrincipal(),
      inlinePolicies: {
        [policyName]: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'AllowListingObjects',
              effect: iam.Effect.ALLOW,
              actions: ['s3:ListBucket'],
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowListingBucketsAndAccessPoints',
              effect: iam.Effect.ALLOW,
              actions: [
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
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowObjectLambdaAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3-object-lambda:Get*',
                's3-object-lambda:List*',
              ],
              resources: [`arn:${cdk.Aws.PARTITION}:s3-object-lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${objectLambdaAccessPointName}`],
            }),
            new iam.PolicyStatement({
              sid: 'AllowStandardAccessPointAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3:Get*',
                's3:List*',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowLambdaInvocation',
              effect: iam.Effect.ALLOW,
              actions: [
                'lambda:InvokeFunction',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
          ],
        }),
      },
    });
    this.roleArn = adminRole.roleArn;
    this.roleName = adminRole.roleName;
    this.roleId = adminRole.roleId;
  }
}

export interface BillingRoleProps {
  /**
   * The name of the IAM policy for the IAM role.
   *
   * @default 'billing-role-s3olap-policy'
   */
  readonly policyName?: string;
  /**
   * The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.
   *
   * @default 'billing-s3olap-call-transcripts-known-pii'
   */
  readonly objectLambdaAccessPointName?: string;
  /**
   * The name of the IAM role.
   *
   * @default 'RedactionBillingRole'
   */
  readonly iamRoleName?: string;
}

export class BillingRole extends cdk.Construct {
  /**
   * The ARN of the IAM role.
   */
  public readonly roleArn: string;
  /**
   * The name of the IAM role.
   */
  public readonly roleName: string;
  /**
   * The unique string identifying the role.
   */
  public readonly roleId: string;
  constructor(scope: cdk.Construct, id: string, props?: AdminRoleProps) {
    super(scope, id);
    const policyName = props?.policyName ?? 'billing-role-s3olap-policy';
    const objectLambdaAccessPointName = props?.objectLambdaAccessPointName ?? 'billing-s3olap-call-transcripts-known-pii';
    const iamRoleName = props?.iamRoleName ?? 'RedactionBillingRole';
    const billingRole = new iam.Role(this, 'RedactionBillingRole', {
      roleName: iamRoleName,
      assumedBy: new iam.AccountRootPrincipal(),
      inlinePolicies: {
        [policyName]: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'AllowListingObjects',
              effect: iam.Effect.ALLOW,
              actions: ['s3:ListBucket'],
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowListingBucketsAndAccessPoints',
              effect: iam.Effect.ALLOW,
              actions: [
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
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowObjectLambdaAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3-object-lambda:Get*',
                's3-object-lambda:List*',
              ],
              resources: [`arn:${cdk.Aws.PARTITION}:s3-object-lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${objectLambdaAccessPointName}`],
            }),
            new iam.PolicyStatement({
              sid: 'AllowStandardAccessPointAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3:Get*',
                's3:List*',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowLambdaInvocation',
              effect: iam.Effect.ALLOW,
              actions: [
                'lambda:InvokeFunction',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
          ],
        }),
      },
    });
    this.roleArn = billingRole.roleArn;
    this.roleName = billingRole.roleName;
    this.roleId = billingRole.roleId;
  }
}

export interface CustSupportRoleProps {
  /**
   * The name of the IAM policy for the IAM role.
   *
   * @default 'customersupport-role-s3olap-policy'
   */
  readonly policyName?: string;
  /**
   * The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.
   *
   * @default 'custsupport-s3olap-call-transcripts-known-pii'
   */
  readonly objectLambdaAccessPointName?: string;
  /**
   * The name of the IAM role.
   *
   * @default 'RedactionCustSupportRole'
   */
  readonly iamRoleName?: string;
}

export class CustSupportRole extends cdk.Construct {
  /**
   * The ARN of the IAM role.
   */
  public readonly roleArn: string;
  /**
   * The name of the IAM role.
   */
  public readonly roleName: string;
  /**
   * The unique string identifying the role.
   */
  public readonly roleId: string;
  constructor(scope: cdk.Construct, id: string, props?: AdminRoleProps) {
    super(scope, id);
    const policyName = props?.policyName ?? 'customersupport-role-s3olap-policy';
    const objectLambdaAccessPointName = props?.objectLambdaAccessPointName ?? 'custsupport-s3olap-call-transcripts-known-pii';
    const iamRoleName = props?.iamRoleName ?? 'RedactionCustSupportRole';
    const custSupportRole = new iam.Role(this, 'RedactionCustSupportRole', {
      roleName: iamRoleName,
      assumedBy: new iam.AccountRootPrincipal(),
      inlinePolicies: {
        [policyName]: new iam.PolicyDocument({
          assignSids: true,
          statements: [
            new iam.PolicyStatement({
              sid: 'AllowListingObjects',
              effect: iam.Effect.ALLOW,
              actions: ['s3:ListBucket'],
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowListingBucketsAndAccessPoints',
              effect: iam.Effect.ALLOW,
              actions: [
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
              resources: ['*'],
            }),
            new iam.PolicyStatement({
              sid: 'AllowObjectLambdaAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3-object-lambda:Get*',
                's3-object-lambda:List*',
              ],
              resources: [`arn:${cdk.Aws.PARTITION}:s3-object-lambda:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:accesspoint/${objectLambdaAccessPointName}`],
            }),
            new iam.PolicyStatement({
              sid: 'AllowStandardAccessPointAccess',
              effect: iam.Effect.ALLOW,
              actions: [
                's3:Get*',
                's3:List*',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
            new iam.PolicyStatement({
              sid: 'AllowLambdaInvocation',
              effect: iam.Effect.ALLOW,
              actions: [
                'lambda:InvokeFunction',
              ],
              resources: ['*'],
              conditions: {
                ['ForAnyValue:StringEquals']: {
                  'aws:CalledVia': ['s3-object-lambda.amazonaws.com'],
                },
              },
            }),
          ],
        }),
      },
    });
    this.roleArn = custSupportRole.roleArn;
    this.roleName = custSupportRole.roleName;
    this.roleId = custSupportRole.roleId;
  }
}