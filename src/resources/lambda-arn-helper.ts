const AWS = require('aws-sdk');

export const lambdaHandler = async (event: any = {}): Promise<any> => {
  console.log('event', event);
  try {
    switch (event.RequestType) {
      case 'Create':
        return await checkLambdaArn(event);
      case 'Update':
        return await checkLambdaArn(event);
    }
  } catch (err) {
    console.error('Unexpected error', err);
    return {
      Data: {
        Status: 'FAILED',
        Reason: JSON.stringify(err),
      },
    };
  }
};


const checkLambdaArn = async (event: any): Promise<any> => {
  const props = event.ResourceProperties;
  console.log(props);
  const lambdaFixedName = props.LambdaFixedName;
  const physicalId = 'ComprehendLambda' + lambdaFixedName;
  try {
    var lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });
    let params = {};
    let functionArn: string = '';
    const result = await lambda.listFunctions(params).promise();
    for (var lambdaFunction of result.Functions) {
      var funcName = lambdaFunction.FunctionName;
      if (funcName.includes(lambdaFixedName)) {
        functionArn = lambdaFunction.FunctionArn;
        break;
      }
    };
    return {
      Status: 'SUCCESS',
      Reason: '',
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: physicalId,
      RequestId: event.RequestId,
      StackId: event.StackId,
      Data: { LambdaArn: functionArn },
    };
  } catch (error) {
    return {
      Status: 'FAILED',
      Reason: JSON.stringify(error),
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: physicalId,
      RequestId: event.RequestId,
      StackId: event.StackId,
    };
  }
};