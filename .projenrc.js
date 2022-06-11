const projen = require('projen');

const project = new projen.awscdk.AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  description: 'A constrcut for PII and redaction scenarios with Amazon Comprehend and S3 Object Lambda',
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

  cdkVersion: '2.27.0',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  name: 'cdk-comprehend-s3olap',
  repositoryUrl: 'https://github.com/HsiehShuJeng/cdk-comprehend-s3olap.git',
  deps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
    'esbuild',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  bundledDeps: ['aws-sdk', 'esbuild'],
  eslint: true,
  tsconfig: { compilerOptions: { lib: ['es2018', 'dom'] } }, //check https://bityl.co/7fHf
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['HsiehShuJeng'],
  },
  releaseToNpm: true,
  publishToPypi: {
    distName: 'cdk_comprehend_s3olap',
    module: 'cdk_comprehend_s3olap',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'cdk-comprehend-s3olap',
    javaPackage: 'io.github.hsiehshujeng.cdk.comprehend.s3olap',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Cdk',
    packageId: 'Comprehend.S3olap',
  },
  publishToGo: {
    moduleName: 'github.com/HsiehShuJeng/cdk-comprehend-s3olap-go',
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