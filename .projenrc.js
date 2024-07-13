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
  jsiiVersion: '5.4.x',
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
const exclusionLists = [
  commonExclusions,
  mavenExclusions,
  pythonDemoExclustions,
  javaDemoExclustions,
];
excludeFilesFrom(project, exclusionLists);
const approveOverridingSteps = {
  'jobs.approve.steps.0.uses': 'hmarr/auto-approve-action@v3.2.1',
};
setupWorkflow('auto-approve', undefined, approveOverridingSteps);

project.package.addPackageResolutions('got@12.3.0');
project.synth();

/**
 * Exclude files from the project's .npmignore and .gitignore.
 *
 * @param {Object} pjObject - The project object to apply the exclusions.
 * @param {Array<Array<string>>} exclusionList - An array of arrays, where each inner array contains a list of file patterns to exclude.
 */
function excludeFilesFrom(pjObject, exclusionList) {
  for (const exclusions of exclusionList) {
    pjObject.npmignore.exclude(...exclusions);
    pjObject.gitignore.exclude(...exclusions);
  }
}

/**
 * Set up a GitHub Actions workflow with the specified environment variables and step overrides.
 *
 * @param {string} workflowName - The name of the workflow to configure.
 * @param {Object} [envOverrides] - An object containing environment variables to override in the workflow.
 * @param {Object} stepsOverrides - An object where each key is a step identifier (e.g., 'jobs.build.steps.2') and each value is an object containing the step configuration to override.
 */
function setupWorkflow(workflowName, envOverrides, stepsOverrides) {
  const workflow = project.github.tryFindWorkflow(workflowName);

  for (const [step, override] of Object.entries(stepsOverrides)) {
    workflow.file.addOverride(step, override);
  }

  if (envOverrides) {
    workflow.file.addOverride(`jobs.${workflowName}.env`, envOverrides);
  }
}
