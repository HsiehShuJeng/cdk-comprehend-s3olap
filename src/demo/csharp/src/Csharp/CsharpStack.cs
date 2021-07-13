using Amazon.CDK;
using ScottHsieh.Cdk;

namespace Csharp
{
    public class CsharpStack : Stack
    {
        internal CsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            var S3olab = new ComprehendS3olab(this, "PiiDemo", new ComprehendS3olabProps
            {
                AdminRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskCharacter = " ",
                    UnsupportedFileHandling = "PASS"
                },
                BillingRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskMode = "REPLACE_WITH_PII_ENTITY_TYPE",
                    PiiEntityTypes = "AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN"
                },
                CusrtSupportRedactionLambdaConfig = new RedactionLambdaProps
                {
                    MaskMode = "REPLACE_WITH_PII_ENTITY_TYPE",
                    PiiEntityTypes = "BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN"
                },
                ExampleFileDir = "/opt/learning/cdk-comprehend-s3olap/src/demo/csharp"
            });

            new CfnOutput(this, "OPiiAccessControlLambdaArn", new CfnOutputProps { Value = S3olab.PiiAccessConrtolLambdaArn });
            new CfnOutput(this, "OAdminLambdaArn", new CfnOutputProps { Value = S3olab.AdminLambdaArn });
            new CfnOutput(this, "OBillingLambdaArn", new CfnOutputProps { Value = S3olab.BillingLambdaArn });
            new CfnOutput(this, "OCustomerSupportLambdaArn", new CfnOutputProps { Value = S3olab.CustomerSupportLambdaArn });
            new CfnOutput(this, "OS3ObjectLambdaGeneralArn", new CfnOutputProps { Value = S3olab.S3objectLambdaAccessControlArn });
            new CfnOutput(this, "OS3ObjectLambdaAdminArn", new CfnOutputProps { Value = S3olab.S3objectLambdaAdminArn });
            new CfnOutput(this, "OS3ObjectLambdaBillingArn", new CfnOutputProps { Value = S3olab.S3objectLambdaBillingArn });
            new CfnOutput(this, "OS3ObjectLambdaCustomerSupportArn", new CfnOutputProps { Value = S3olab.CustomerSupportLambdaArn });
        }
    }
}
