package com.myorg;

import software.amazon.awscdk.core.App;
// import software.amazon.awscdk.core.Environment;
import software.amazon.awscdk.core.StackProps;

// import java.util.Arrays;

public class JavaApp {
        public static void main(final String[] args) {
                App app = new App();

                new JavaStack(app, "JavaStack", StackProps.builder().stackName("Comprehend-S3olap").build());

                app.synth();
        }
}
