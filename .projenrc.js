const { AwsCdkConstructLibrary, NpmAccess, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  keywords: [
    'amazon-comprehhend',
    'aws-sam',
    'object-lambda',
    'pii',
    's3',
    'scott.hsieh'
  ],

  catalog: {
    announce: true
  },

  cdkVersion: '1.110.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-comprehend-s3olap',
  repositoryUrl: 'git@scott:HsiehShuJeng/cdk-comprehend-s3olap.git',
  projectType: ProjectType.LIB,

  cdkDependencies: [
    '@aws-cdk/aws-s3',
  ],
  cdkAssert: true,
  npmAccess: NpmAccess.PUBLIC,

  eslint: true,
  projenUpgradeSecret: 'PROJEN_UPGRADE_SECRET',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
  },
  depsUpgradeAutoMerge: true,

  // publish to npm
  releaseToNpm: true,
  releaseWorkflow: true,
  releaseEveryCommit: true, //will run the release GitHub Action on each push to the defined

  // publish to PyPi
  publishToPypi: {
    distName: 'cdk_comprehend_s3olap',
    module: 'cdk_comprehend_s3olap',
  },

  // publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'cdk-comprehend-s3olap',
    javaPackage: 'io.github.hsiehshujeng.cdk.comprehend.s3olap',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },

  // publish to dotnet
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Cdk',
    packageId: 'Comprehend.S3olap',
  },
});
project.synth();