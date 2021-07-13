package com.myorg;

import software.amazon.awscdk.core.CfnOutput;
import software.amazon.awscdk.core.CfnOutputProps;
import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.Stack;
import software.amazon.awscdk.core.StackProps;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.RedactionLambdaProps;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.ComprehendS3olab;
import io.github.hsiehshujeng.cdk.comprehend.s3olap.ComprehendS3olabProps;

public class JavaStack extends Stack {
    public JavaStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public JavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        ComprehendS3olab s3olab = new ComprehendS3olab(this, "PiiDemo", ComprehendS3olabProps.builder()
            .adminRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                    .maskCharacter(" ")
                    .unsupportedFileHandling("PASS").build())
            .billingRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                    .maskMode("REPLACE_WITH_PII_ENTITY_TYPE")
                    .piiEntityTypes("AGE,DRIVER_ID,IP_ADDRESS,MAC_ADDRESS,PASSPORT_NUMBER,PASSWORD,SSN")
                    .build())
            .cusrtSupportRedactionLambdaConfig(
                RedactionLambdaProps.builder()
                .maskMode("REPLACE_WITH_PII_ENTITY_TYPE")
                .piiEntityTypes("BANK_ACCOUNT_NUMBER,BANK_ROUTING,CREDIT_DEBIT_CVV,CREDIT_DEBIT_EXPIRY,CREDIT_DEBIT_NUMBER,SSN")
                .build())
            .exampleFileDir("/opt/learning/cdk-comprehend-s3olap/src/demo/java")
            .build()
            );
      
          new CfnOutput(this, "OPiiAccessControlLambdaArn", CfnOutputProps.builder().value(s3olab.getPiiAccessConrtolLambdaArn()).build());
          new CfnOutput(this, "OAdminLambdaArn", CfnOutputProps.builder().value(s3olab.getAdminLambdaArn()).build());
          new CfnOutput(this, "OBillingLambdaArn", CfnOutputProps.builder().value(s3olab.getBillingLambdaArn()).build());
          new CfnOutput(this, "OCustomerSupportLambdaArn", CfnOutputProps.builder().value(s3olab.getCustomerSupportLambdaArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaGeneralArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaAccessControlArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaAdminArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaAdminArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaBillingArn", CfnOutputProps.builder().value(s3olab.getS3objectLambdaBillingArn()).build());
          new CfnOutput(this, "OS3ObjectLambdaCustomerSupportArn", CfnOutputProps.builder().value(s3olab.getCustomerSupportLambdaArn()).build());
    }
}
