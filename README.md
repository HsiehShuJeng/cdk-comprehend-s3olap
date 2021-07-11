# cdk-comprehend-s3olap
This construct provides a functionality to process data from AWS S3 via Amazon S3 Object Lambda combined with Amazon Comprehend. 

# Serverless Architecture  
# Introduction  
The architecture was introduced by **Ram Ramani** and **Austin Quam** and was posted on the AWS Blog as [Protect PII using Amazon S3 Object Lambda to process and modify data during retrieval](https://aws.amazon.com/tw/blogs/machine-learning/protect-pii-using-amazon-s3-object-lambda-to-process-and-modify-data-during-retrieval/).  
I converted the architecture into a CDK constrcut for 4 programming languages. With this construct, you could manage the properties of IAM roles, Lambda functions with Amazon Comprehend, and few for the constrcut.  
Before deploying the construct via the CDK, you could either places the text files, i.e., those for the access control case and redaction case, under a directory with a specific name as the following or just deploying directly yet you need to upload the text files onto the S3 buckets manually yourself. It's all your choie.  
```bash
# For the access control case.
$ cd ${ROOT_DIRECTORY_CDK_APPLICATION}
$ mkdir -p files/access_control  
$ curl -o survey-results.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/access-control/survey-results.txt
$ curl -o innocuous.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/access-control/innocuous.txt
# For the redaction case.
$ cd ${ROOT_DIRECTORY_CDK_APPLICATION}
$ mkdir -p files/redaction
$ curl -o transcript.txt https://raw.githubusercontent.com/aws-samples/amazon-comprehend-examples/master/s3_object_lambda_pii_protection_blog/redaction/transcript.txt
```  
# Example  