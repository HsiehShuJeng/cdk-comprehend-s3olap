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
  let redactFunctions: Array<{ arn: string; lastModified: string }> = [];
  let sortedRedactFunctions: Array<{ arn: string; lastModified: string }> = [];
  let dateGroup: Array<string> = [];

  const props = event.ResourceProperties;
  const lambdaFixedName = props.LambdaFixedName;
  const genre = props.Genre;
  const physicalId = 'ComprehendLambda' + lambdaFixedName + (Math.floor(Math.random() * 1000000) + 1).toString();
  try {
    var lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });
    let params = {};
    let functionArn: string = '';
    const result = await lambda.listFunctions(params).promise();
    if (lambdaFixedName === 'PiiAccessControlFunction') {
      for (var lambdaFunction of result.Functions) {
        var funcName = lambdaFunction.FunctionName;
        if (funcName.includes(lambdaFixedName)) {
          functionArn = lambdaFunction.FunctionArn;
          break;
        }
      };
    }
    if (lambdaFixedName === 'PiiRedactionFunction') {
      for (var lambdaFunction of result.Functions) {
        var funcName = lambdaFunction.FunctionName;
        if (funcName.includes(lambdaFixedName)) {
          redactFunctions.push({
            arn: lambdaFunction.FunctionArn,
            lastModified: lambdaFunction.LastModified,
          });
        }
      };
      for (var redactFunction of redactFunctions) {
        dateGroup.push(redactFunction.lastModified);
      }
      dateGroup.sort((a, b) => 0 - (a > b ? -1 : 1));
      for (var dateTime of dateGroup) {
        for (var redactFunction of redactFunctions) {
          if (redactFunction.lastModified === dateTime) {
            sortedRedactFunctions.push({
              arn: redactFunction.arn,
              lastModified: redactFunction.lastModified,
            });
          }
        }
      }
      switch (genre) {
        case 'Admin':
          functionArn = sortedRedactFunctions[0].arn;
          break;
        case 'Billing':
          functionArn = sortedRedactFunctions[1].arn;
          break;
        case 'CustSupport':
          functionArn = sortedRedactFunctions[2].arn;
          break;
        default:
          functionArn = '';
          break;
      }
    }

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