const { AwsCdkConstructLibrary, NpmAccess, ProjectType } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  keywords: [
    'amazon-comprehhend',
    'aws-sam',
    'pii',
    's3',
    'scott.hsieh',
    'machine-learning',
    'AWS::S3ObjectLambda',
    'aws-s3objectlambda',
    'lambda',
  ],

  catalog: {
    twitter: 'fantasticHsieh',
    announce: true,
  },

  cdkVersion: '1.112.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-comprehend-s3olap',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-comprehend-s3olap.git',
  projectType: ProjectType.LIB,

  devDeps: ['esbuild'],
  bundledDeps: ['aws-sdk', 'esbuild'],
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-sam',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/aws-s3objectlambda',
  ],
  cdkAssert: true,
  npmAccess: NpmAccess.PUBLIC,

  eslint: true,
  tsconfig: { compilerOptions: { lib: ['es2018', 'dom'] } }, //check https://bityl.co/7fHf
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
project.eslint.addOverride({
  files: ['*.ts'],
  rules: { '@typescript-eslint/no-require-imports': 0 },
});
const mavenExclusions = ['public.pem', 'private.pem'];
const pythonDemoExclustions = [
  '*.swp',
  'package-lock.json',
  '__pycache__',
  '.pytest_cache',
  '.env',
  '.venv',
  '*.egg-info',
];
const javaDemoExclustions = [
  '.classpath.txt',
  'target/',
  '.classpath',
  '.project',
  '.idea',
  '.settings',
  '.vscode/',
  '*.iml',
];
const commonExclusions = ['cdk.context.json', 'yarn-error.log', 'cdk.out', '.cdk.staging', '.DS_Store'];
project.npmignore.exclude(...commonExclusions);
project.gitignore.exclude(...commonExclusions);
project.npmignore.exclude(...mavenExclusions);
project.gitignore.exclude(...mavenExclusions);
project.npmignore.exclude(...pythonDemoExclustions);
project.gitignore.exclude(...pythonDemoExclustions);
project.npmignore.exclude(...javaDemoExclustions);
project.gitignore.exclude(...javaDemoExclustions);
project.synth();