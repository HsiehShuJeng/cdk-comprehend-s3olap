using Amazon.CDK;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Csharp
{
    sealed class Program
    {
        public static void Main(string[] args)
        {
            var app = new App();
            new CsharpStack(app, "CsharpStack", new StackProps
            {
                StackName = "Comprehend-S3olap"
            });
            app.Synth();
        }
    }
}
