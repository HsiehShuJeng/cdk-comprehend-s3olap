import * as cdk from '@aws-cdk/core';


// arn:aws:serverlessrepo:us-east-1:839782855223:applications/ComprehendPiiAccessControlS3ObjectLambda

/**
 * Construct properties for ServerlessApp
 */
export interface ServerlessAppProps {
  /**
     * The application ID of an application in the Serverless Application Repository.
     *
     * e.g. arn:aws:serverlessrepo:us-east-1:839782855223:applications/ComprehendPiiRedactionS3ObjectLambda
     */
  readonly applicationId: string;
  /**
     * The version of an applicaiton.
     */
  readonly semanticVersion: string;
}

export class ServerlessApp extends cdk.Construct {
  readonly resource: cdk.CfnResource;
  constructor(scope: cdk.Construct, id: string, props: ServerlessAppProps) {
    super(scope, id);
    this.resource = new cdk.CfnResource(this, id, {
      type: 'AWS::Serverless::Application',
      properties: {
        Location: {
          ApplicationId: props.applicationId,
          SemanticVersion: props.semanticVersion,
        },
      },
    });
    cdk.Stack.of(this).templateOptions.transforms = ['AWS::Serverless-2016-10-31'];
  }
}
