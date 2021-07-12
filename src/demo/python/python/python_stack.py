from aws_cdk import core as cdk
from cdk_comprehend_s3olap import ComprehendS3olab


class PythonStack(cdk.Stack):

    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        s3olab = ComprehendS3olab(self, "PiiDemo",
            admin_redaction_lambda_config={
                "mask_character": " ",
                "unsupported_file_handling": "PASS"
            },
            billing_redaction_lambda_config={
                "mask_mode": "REPLACE_WITH_PII_ENTITY_TYPE",
                "pii_entity_types": "AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN"
            },
            cusrt_support_redaction_lambda_config={
                "mask_mode": "REPLACE_WITH_PII_ENTITY_TYPE",
                "pii_entity_types": " BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN"
            }
        )

        cdk.CfnOutput(self, "OPiiAccessControlLambdaArn", value=s3olab.pii_access_conrtol_lambda_arn)
        cdk.CfnOutput(self, "OAdminLambdaArn", value=s3olab.admin_lambda_arn)
        cdk.CfnOutput(self, "OBillingLambdaArn", value=s3olab.billing_lambda_arn)
        cdk.CfnOutput(self, "OCustomerSupportLambdaArn", value=s3olab.customer_support_lambda_arn)
        cdk.CfnOutput(self, "OS3ObjectLambdaGeneralArn", value=s3olab.s3object_lambda_access_control_arn)
        cdk.CfnOutput(self, "OS3ObjectLambdaAdminArn", value=s3olab.s3object_lambda_admin_arn)
        cdk.CfnOutput(self, "OS3ObjectLambdaBillingArn", value=s3olab.s3object_lambda_billing_arn)
        cdk.CfnOutput(self, "OS3ObjectLambdaCustomerSupportArn", value=s3olab.customer_support_lambda_arn)
        
