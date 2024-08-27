# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessConrtolLambda <a name="AccessConrtolLambda" id="cdk-comprehend-s3olap.AccessConrtolLambda"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.AccessConrtolLambda.Initializer"></a>

```typescript
import { AccessConrtolLambda } from 'cdk-comprehend-s3olap'

new AccessConrtolLambda(scope: Construct, id: string, props: AccessConrtolLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps">AccessConrtolLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-comprehend-s3olap.AccessConrtolLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps">AccessConrtolLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.AccessConrtolLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.AccessConrtolLambda.isConstruct"></a>

```typescript
import { AccessConrtolLambda } from 'cdk-comprehend-s3olap'

AccessConrtolLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.AccessConrtolLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambda.property.stackName">stackName</a></code> | <code>string</code> | The name of the underlying resoure in the serverless application. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.AccessConrtolLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-comprehend-s3olap.AccessConrtolLambda.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The name of the underlying resoure in the serverless application.

---


### AdminRole <a name="AdminRole" id="cdk-comprehend-s3olap.AdminRole"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.AdminRole.Initializer"></a>

```typescript
import { AdminRole } from 'cdk-comprehend-s3olap'

new AdminRole(scope: Construct, id: string, props?: AdminRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.AdminRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.AdminRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-comprehend-s3olap.AdminRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.AdminRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.AdminRole.isConstruct"></a>

```typescript
import { AdminRole } from 'cdk-comprehend-s3olap'

AdminRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.AdminRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.property.roleId">roleId</a></code> | <code>string</code> | The unique string identifying the role. |
| <code><a href="#cdk-comprehend-s3olap.AdminRole.property.roleName">roleName</a></code> | <code>string</code> | The name of the IAM role. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.AdminRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdk-comprehend-s3olap.AdminRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="cdk-comprehend-s3olap.AdminRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The unique string identifying the role.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdk-comprehend-s3olap.AdminRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the IAM role.

---


### BillingRole <a name="BillingRole" id="cdk-comprehend-s3olap.BillingRole"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.BillingRole.Initializer"></a>

```typescript
import { BillingRole } from 'cdk-comprehend-s3olap'

new BillingRole(scope: Construct, id: string, props?: AdminRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.BillingRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.BillingRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-comprehend-s3olap.BillingRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.BillingRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.BillingRole.isConstruct"></a>

```typescript
import { BillingRole } from 'cdk-comprehend-s3olap'

BillingRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.BillingRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.property.roleId">roleId</a></code> | <code>string</code> | The unique string identifying the role. |
| <code><a href="#cdk-comprehend-s3olap.BillingRole.property.roleName">roleName</a></code> | <code>string</code> | The name of the IAM role. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.BillingRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdk-comprehend-s3olap.BillingRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="cdk-comprehend-s3olap.BillingRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The unique string identifying the role.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdk-comprehend-s3olap.BillingRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the IAM role.

---


### ComprehendS3olab <a name="ComprehendS3olab" id="cdk-comprehend-s3olap.ComprehendS3olab"></a>

Creates the foundation necessary to deploy the S3 Object Lambda Acceess Control Use Case.

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.ComprehendS3olab.Initializer"></a>

```typescript
import { ComprehendS3olab } from 'cdk-comprehend-s3olap'

new ComprehendS3olab(scope: Construct, id: string, props: ComprehendS3olabProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps">ComprehendS3olabProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-comprehend-s3olap.ComprehendS3olab.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.ComprehendS3olabProps">ComprehendS3olabProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.generateS3Prefix">generateS3Prefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.ComprehendS3olab.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `generateS3Prefix` <a name="generateS3Prefix" id="cdk-comprehend-s3olap.ComprehendS3olab.generateS3Prefix"></a>

```typescript
public generateS3Prefix(length: number): string
```

###### `length`<sup>Required</sup> <a name="length" id="cdk-comprehend-s3olap.ComprehendS3olab.generateS3Prefix.parameter.length"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.ComprehendS3olab.isConstruct"></a>

```typescript
import { ComprehendS3olab } from 'cdk-comprehend-s3olap'

ComprehendS3olab.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.ComprehendS3olab.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.adminLambdaArn">adminLambdaArn</a></code> | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie administrator role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.billingLambdaArn">billingLambdaArn</a></code> | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie billing role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.customerSupportLambdaArn">customerSupportLambdaArn</a></code> | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for thie customer support role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.piiAccessConrtolLambdaArn">piiAccessConrtolLambdaArn</a></code> | <code>string</code> | The ARN of the Lambda function combined with Amazon Comprehend for the general case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaAccessControlArn">s3objectLambdaAccessControlArn</a></code> | <code>string</code> | The ARN of the S3 Object Lambda for access control. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaAdminArn">s3objectLambdaAdminArn</a></code> | <code>string</code> | The ARN of the S3 Object Lambda for the admin role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaBillingArn">s3objectLambdaBillingArn</a></code> | <code>string</code> | The ARN of the S3 Object Lambda for the billing role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaCustomerSupportArn">s3objectLambdaCustomerSupportArn</a></code> | <code>string</code> | The ARN of the S3 Object Lambda for the customer support role in the redaction case. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.ComprehendS3olab.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `adminLambdaArn`<sup>Required</sup> <a name="adminLambdaArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.adminLambdaArn"></a>

```typescript
public readonly adminLambdaArn: string;
```

- *Type:* string

The ARN of the Lambda function combined with Amazon Comprehend for thie administrator role in the redaction case.

---

##### `billingLambdaArn`<sup>Required</sup> <a name="billingLambdaArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.billingLambdaArn"></a>

```typescript
public readonly billingLambdaArn: string;
```

- *Type:* string

The ARN of the Lambda function combined with Amazon Comprehend for thie billing role in the redaction case.

---

##### `customerSupportLambdaArn`<sup>Required</sup> <a name="customerSupportLambdaArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.customerSupportLambdaArn"></a>

```typescript
public readonly customerSupportLambdaArn: string;
```

- *Type:* string

The ARN of the Lambda function combined with Amazon Comprehend for thie customer support role in the redaction case.

---

##### `piiAccessConrtolLambdaArn`<sup>Required</sup> <a name="piiAccessConrtolLambdaArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.piiAccessConrtolLambdaArn"></a>

```typescript
public readonly piiAccessConrtolLambdaArn: string;
```

- *Type:* string

The ARN of the Lambda function combined with Amazon Comprehend for the general case.

---

##### `s3objectLambdaAccessControlArn`<sup>Required</sup> <a name="s3objectLambdaAccessControlArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaAccessControlArn"></a>

```typescript
public readonly s3objectLambdaAccessControlArn: string;
```

- *Type:* string

The ARN of the S3 Object Lambda for access control.

---

##### `s3objectLambdaAdminArn`<sup>Required</sup> <a name="s3objectLambdaAdminArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaAdminArn"></a>

```typescript
public readonly s3objectLambdaAdminArn: string;
```

- *Type:* string

The ARN of the S3 Object Lambda for the admin role in the redaction case.

---

##### `s3objectLambdaBillingArn`<sup>Required</sup> <a name="s3objectLambdaBillingArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaBillingArn"></a>

```typescript
public readonly s3objectLambdaBillingArn: string;
```

- *Type:* string

The ARN of the S3 Object Lambda for the billing role in the redaction case.

---

##### `s3objectLambdaCustomerSupportArn`<sup>Required</sup> <a name="s3objectLambdaCustomerSupportArn" id="cdk-comprehend-s3olap.ComprehendS3olab.property.s3objectLambdaCustomerSupportArn"></a>

```typescript
public readonly s3objectLambdaCustomerSupportArn: string;
```

- *Type:* string

The ARN of the S3 Object Lambda for the customer support role in the redaction case.

---


### CustSupportRole <a name="CustSupportRole" id="cdk-comprehend-s3olap.CustSupportRole"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.CustSupportRole.Initializer"></a>

```typescript
import { CustSupportRole } from 'cdk-comprehend-s3olap'

new CustSupportRole(scope: Construct, id: string, props?: AdminRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-comprehend-s3olap.CustSupportRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.CustSupportRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.CustSupportRole.isConstruct"></a>

```typescript
import { CustSupportRole } from 'cdk-comprehend-s3olap'

CustSupportRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.CustSupportRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.property.roleId">roleId</a></code> | <code>string</code> | The unique string identifying the role. |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRole.property.roleName">roleName</a></code> | <code>string</code> | The name of the IAM role. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.CustSupportRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdk-comprehend-s3olap.CustSupportRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="cdk-comprehend-s3olap.CustSupportRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The unique string identifying the role.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdk-comprehend-s3olap.CustSupportRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the IAM role.

---


### GeneralRole <a name="GeneralRole" id="cdk-comprehend-s3olap.GeneralRole"></a>

The role that you are going to assume (switch role).

Explores how the S3 Object Lambda works.

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.GeneralRole.Initializer"></a>

```typescript
import { GeneralRole } from 'cdk-comprehend-s3olap'

new GeneralRole(scope: Construct, id: string, props: GeneralRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.GeneralRoleProps">GeneralRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-comprehend-s3olap.GeneralRole.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.GeneralRoleProps">GeneralRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.GeneralRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.GeneralRole.isConstruct"></a>

```typescript
import { GeneralRole } from 'cdk-comprehend-s3olap'

GeneralRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.GeneralRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.property.roleId">roleId</a></code> | <code>string</code> | The unique string identifying the role. |
| <code><a href="#cdk-comprehend-s3olap.GeneralRole.property.roleName">roleName</a></code> | <code>string</code> | The name of the IAM role. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.GeneralRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdk-comprehend-s3olap.GeneralRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="cdk-comprehend-s3olap.GeneralRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The unique string identifying the role.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdk-comprehend-s3olap.GeneralRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the IAM role.

---


### LambdaArnCaptorCustomResource <a name="LambdaArnCaptorCustomResource" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer"></a>

```typescript
import { LambdaArnCaptorCustomResource } from 'cdk-comprehend-s3olap'

new LambdaArnCaptorCustomResource(scope: Construct, id: string, props: LambdaArnCaptorResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorResourceProps">LambdaArnCaptorResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.LambdaArnCaptorResourceProps">LambdaArnCaptorResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.isConstruct"></a>

```typescript
import { LambdaArnCaptorCustomResource } from 'cdk-comprehend-s3olap'

LambdaArnCaptorCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | The ARN of the general Lambda function created from the serverless application. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="cdk-comprehend-s3olap.LambdaArnCaptorCustomResource.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

The ARN of the general Lambda function created from the serverless application.

> [https://github.com/aws/aws-cdk/issues/8760](https://github.com/aws/aws-cdk/issues/8760)

---


### RedactionLambda <a name="RedactionLambda" id="cdk-comprehend-s3olap.RedactionLambda"></a>

#### Initializers <a name="Initializers" id="cdk-comprehend-s3olap.RedactionLambda.Initializer"></a>

```typescript
import { RedactionLambda } from 'cdk-comprehend-s3olap'

new RedactionLambda(scope: Construct, id: string, props?: RedactionLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-comprehend-s3olap.RedactionLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-comprehend-s3olap.RedactionLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-comprehend-s3olap.RedactionLambda.isConstruct"></a>

```typescript
import { RedactionLambda } from 'cdk-comprehend-s3olap'

RedactionLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-comprehend-s3olap.RedactionLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambda.property.stackName">stackName</a></code> | <code>string</code> | The name of the underlying resoure in the serverless application. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-comprehend-s3olap.RedactionLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-comprehend-s3olap.RedactionLambda.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The name of the underlying resoure in the serverless application.

---


## Structs <a name="Structs" id="Structs"></a>

### AccessConrtolLambdaProps <a name="AccessConrtolLambdaProps" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.Initializer"></a>

```typescript
import { AccessConrtolLambdaProps } from 'cdk-comprehend-s3olap'

const accessConrtolLambdaProps: AccessConrtolLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | The minimum prediction confidence score above which PII classification and detection would be considered as final answer. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.containsPiiEntitiesThreadCount">containsPiiEntitiesThreadCount</a></code> | <code>string</code> | Number of threads to use for calling Comprehend's ContainsPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | Default language of the text to be processed. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.documentMaxSize">documentMaxSize</a></code> | <code>string</code> | Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.documentMaxSizeContainsPiiEntities">documentMaxSizeContainsPiiEntities</a></code> | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.isPartialObjectSupported">isPartialObjectSupported</a></code> | <code>string</code> | Whether to support partial objects or not. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.logLevel">logLevel</a></code> | <code>string</code> | Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.maxCharsOverlap">maxCharsOverlap</a></code> | <code>string</code> | Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | List of comma separated PII entity types to be considered for access control. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.publishCloudWatchMetrics">publishCloudWatchMetrics</a></code> | <code>string</code> | True if publish metrics to Cloudwatch, false otherwise. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | The version of the serverless application. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.subsegmentOverlappingTokens">subsegmentOverlappingTokens</a></code> | <code>string</code> | Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit. |
| <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.unsupportedFileHandling">unsupportedFileHandling</a></code> | <code>string</code> | Handling logic for Unsupported files. |

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string
- *Default:* '0.5'

The minimum prediction confidence score above which PII classification and detection would be considered as final answer.

Valid range (0.5 to 1.0).

---

##### `containsPiiEntitiesThreadCount`<sup>Optional</sup> <a name="containsPiiEntitiesThreadCount" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.containsPiiEntitiesThreadCount"></a>

```typescript
public readonly containsPiiEntitiesThreadCount: string;
```

- *Type:* string
- *Default:* '20'

Number of threads to use for calling Comprehend's ContainsPiiEntities API.

This controls the number of simultaneous calls that will be made from this Lambda.

---

##### `defaultLanguageCode`<sup>Optional</sup> <a name="defaultLanguageCode" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string
- *Default:* 'en'

Default language of the text to be processed.

This code will be used for interacting with Comprehend.

---

##### `documentMaxSize`<sup>Optional</sup> <a name="documentMaxSize" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.documentMaxSize"></a>

```typescript
public readonly documentMaxSize: string;
```

- *Type:* string
- *Default:* '102400'

Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.

---

##### `documentMaxSizeContainsPiiEntities`<sup>Optional</sup> <a name="documentMaxSizeContainsPiiEntities" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.documentMaxSizeContainsPiiEntities"></a>

```typescript
public readonly documentMaxSizeContainsPiiEntities: string;
```

- *Type:* string
- *Default:* '50000'

Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.

---

##### `isPartialObjectSupported`<sup>Optional</sup> <a name="isPartialObjectSupported" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.isPartialObjectSupported"></a>

```typescript
public readonly isPartialObjectSupported: string;
```

- *Type:* string
- *Default:* 'false'

Whether to support partial objects or not.

Accessing partial object through http headers such byte-range can corrupt the object and/or affect PII detection accuracy.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string
- *Default:* 'INFO'

Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.

---

##### `maxCharsOverlap`<sup>Optional</sup> <a name="maxCharsOverlap" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.maxCharsOverlap"></a>

```typescript
public readonly maxCharsOverlap: string;
```

- *Type:* string
- *Default:* '200'

Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string
- *Default:* 'ALL'

List of comma separated PII entity types to be considered for access control.

Refer Comprehend's documentation page for list of supported PII entity types.

---

##### `publishCloudWatchMetrics`<sup>Optional</sup> <a name="publishCloudWatchMetrics" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.publishCloudWatchMetrics"></a>

```typescript
public readonly publishCloudWatchMetrics: string;
```

- *Type:* string
- *Default:* 'true'

True if publish metrics to Cloudwatch, false otherwise.

See README.md for details on CloudWatch metrics.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string
- *Default:* '1.0.2'

The version of the serverless application.

---

##### `subsegmentOverlappingTokens`<sup>Optional</sup> <a name="subsegmentOverlappingTokens" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.subsegmentOverlappingTokens"></a>

```typescript
public readonly subsegmentOverlappingTokens: string;
```

- *Type:* string
- *Default:* '20'

Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.

---

##### `unsupportedFileHandling`<sup>Optional</sup> <a name="unsupportedFileHandling" id="cdk-comprehend-s3olap.AccessConrtolLambdaProps.property.unsupportedFileHandling"></a>

```typescript
public readonly unsupportedFileHandling: string;
```

- *Type:* string
- *Default:* 'FAIL'

Handling logic for Unsupported files.

Valid values are PASS and FAIL.

---

### AdminRoleProps <a name="AdminRoleProps" id="cdk-comprehend-s3olap.AdminRoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.AdminRoleProps.Initializer"></a>

```typescript
import { AdminRoleProps } from 'cdk-comprehend-s3olap'

const adminRoleProps: AdminRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.AdminRoleProps.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | The name of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.AdminRoleProps.property.objectLambdaAccessPointName">objectLambdaAccessPointName</a></code> | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. |
| <code><a href="#cdk-comprehend-s3olap.AdminRoleProps.property.policyName">policyName</a></code> | <code>string</code> | The name of the IAM policy for the IAM role. |

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-comprehend-s3olap.AdminRoleProps.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* 'RedactionAdminRole'

The name of the IAM role.

---

##### `objectLambdaAccessPointName`<sup>Optional</sup> <a name="objectLambdaAccessPointName" id="cdk-comprehend-s3olap.AdminRoleProps.property.objectLambdaAccessPointName"></a>

```typescript
public readonly objectLambdaAccessPointName: string;
```

- *Type:* string
- *Default:* 'admin-s3olap-call-transcripts-known-pii'

The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="cdk-comprehend-s3olap.AdminRoleProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string
- *Default:* 'admin-role-s3olap-policy'

The name of the IAM policy for the IAM role.

---

### BillingRoleProps <a name="BillingRoleProps" id="cdk-comprehend-s3olap.BillingRoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.BillingRoleProps.Initializer"></a>

```typescript
import { BillingRoleProps } from 'cdk-comprehend-s3olap'

const billingRoleProps: BillingRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.BillingRoleProps.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | The name of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.BillingRoleProps.property.objectLambdaAccessPointName">objectLambdaAccessPointName</a></code> | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. |
| <code><a href="#cdk-comprehend-s3olap.BillingRoleProps.property.policyName">policyName</a></code> | <code>string</code> | The name of the IAM policy for the IAM role. |

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-comprehend-s3olap.BillingRoleProps.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* 'RedactionBillingRole'

The name of the IAM role.

---

##### `objectLambdaAccessPointName`<sup>Optional</sup> <a name="objectLambdaAccessPointName" id="cdk-comprehend-s3olap.BillingRoleProps.property.objectLambdaAccessPointName"></a>

```typescript
public readonly objectLambdaAccessPointName: string;
```

- *Type:* string
- *Default:* 'billing-s3olap-call-transcripts-known-pii'

The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="cdk-comprehend-s3olap.BillingRoleProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string
- *Default:* 'billing-role-s3olap-policy'

The name of the IAM policy for the IAM role.

---

### ComprehendS3olabProps <a name="ComprehendS3olabProps" id="cdk-comprehend-s3olap.ComprehendS3olabProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.ComprehendS3olabProps.Initializer"></a>

```typescript
import { ComprehendS3olabProps } from 'cdk-comprehend-s3olap'

const comprehendS3olabProps: ComprehendS3olabProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.accessControlLambdaConfig">accessControlLambdaConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps">AccessConrtolLambdaProps</a></code> | The parameters needed for the `ComprehendPiiAccessControlS3ObjectLambda` function. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.adminRedactionLambdaConfig">adminRedactionLambdaConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a></code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `AdminRole`. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.adminRoleConfig">adminRoleConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a></code> | The manageable properties for the administrator IAM role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.billingRedactionLambdaConfig">billingRedactionLambdaConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a></code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `BillingRole`. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.billingRoleConfig">billingRoleConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.BillingRoleProps">BillingRoleProps</a></code> | The manageable properties for the billing IAM role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.cusrtSupportRedactionLambdaConfig">cusrtSupportRedactionLambdaConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a></code> | The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `CustSupportRole`. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.custSupportRoleConfig">custSupportRoleConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.CustSupportRoleProps">CustSupportRoleProps</a></code> | The manageable properties for the customer support IAM role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.exampleFileDir">exampleFileDir</a></code> | <code>string</code> | The directory path where `files/access_control/*.txt` and `files/redaction/*.txt` will be put. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.generalRoleConfig">generalRoleConfig</a></code> | <code><a href="#cdk-comprehend-s3olap.GeneralRoleProps">GeneralRoleProps</a></code> | The manageable properties for the IAM role used to access the `survey-results.txt` data. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.generateRandomCharacters">generateRandomCharacters</a></code> | <code>boolean</code> | For distinguish test and normal deployment. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.s3AccessPointNames">s3AccessPointNames</a></code> | <code><a href="#cdk-comprehend-s3olap.S3AccessPointNames">S3AccessPointNames</a></code> | The names of the S3 access points for the access control case and redaction case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.surveyBucketPrefix">surveyBucketPrefix</a></code> | <code>string</code> | The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the access control case. |
| <code><a href="#cdk-comprehend-s3olap.ComprehendS3olabProps.property.transcriptsBucketPrefix">transcriptsBucketPrefix</a></code> | <code>string</code> | The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the redaction case. |

---

##### `accessControlLambdaConfig`<sup>Optional</sup> <a name="accessControlLambdaConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.accessControlLambdaConfig"></a>

```typescript
public readonly accessControlLambdaConfig: AccessConrtolLambdaProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.AccessConrtolLambdaProps">AccessConrtolLambdaProps</a>

The parameters needed for the `ComprehendPiiAccessControlS3ObjectLambda` function.

---

##### `adminRedactionLambdaConfig`<sup>Optional</sup> <a name="adminRedactionLambdaConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.adminRedactionLambdaConfig"></a>

```typescript
public readonly adminRedactionLambdaConfig: RedactionLambdaProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a>

The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `AdminRole`.

---

##### `adminRoleConfig`<sup>Optional</sup> <a name="adminRoleConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.adminRoleConfig"></a>

```typescript
public readonly adminRoleConfig: AdminRoleProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.AdminRoleProps">AdminRoleProps</a>

The manageable properties for the administrator IAM role in the redaction case.

---

##### `billingRedactionLambdaConfig`<sup>Optional</sup> <a name="billingRedactionLambdaConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.billingRedactionLambdaConfig"></a>

```typescript
public readonly billingRedactionLambdaConfig: RedactionLambdaProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a>

The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `BillingRole`.

---

##### `billingRoleConfig`<sup>Optional</sup> <a name="billingRoleConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.billingRoleConfig"></a>

```typescript
public readonly billingRoleConfig: BillingRoleProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.BillingRoleProps">BillingRoleProps</a>

The manageable properties for the billing IAM role in the redaction case.

---

##### `cusrtSupportRedactionLambdaConfig`<sup>Optional</sup> <a name="cusrtSupportRedactionLambdaConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.cusrtSupportRedactionLambdaConfig"></a>

```typescript
public readonly cusrtSupportRedactionLambdaConfig: RedactionLambdaProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.RedactionLambdaProps">RedactionLambdaProps</a>

The parameters of the `ComprehendPiiRedactionS3ObjectLambda` function for the `CustSupportRole`.

---

##### `custSupportRoleConfig`<sup>Optional</sup> <a name="custSupportRoleConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.custSupportRoleConfig"></a>

```typescript
public readonly custSupportRoleConfig: CustSupportRoleProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.CustSupportRoleProps">CustSupportRoleProps</a>

The manageable properties for the customer support IAM role in the redaction case.

---

##### `exampleFileDir`<sup>Optional</sup> <a name="exampleFileDir" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.exampleFileDir"></a>

```typescript
public readonly exampleFileDir: string;
```

- *Type:* string
- *Default:* __dirname

The directory path where `files/access_control/*.txt` and `files/redaction/*.txt` will be put.

DO NOT INCLUDE `/` in the end.

---

##### `generalRoleConfig`<sup>Optional</sup> <a name="generalRoleConfig" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.generalRoleConfig"></a>

```typescript
public readonly generalRoleConfig: GeneralRoleProps;
```

- *Type:* <a href="#cdk-comprehend-s3olap.GeneralRoleProps">GeneralRoleProps</a>

The manageable properties for the IAM role used to access the `survey-results.txt` data.

---

##### `generateRandomCharacters`<sup>Optional</sup> <a name="generateRandomCharacters" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.generateRandomCharacters"></a>

```typescript
public readonly generateRandomCharacters: boolean;
```

- *Type:* boolean
- *Default:* true

For distinguish test and normal deployment.

---

##### `s3AccessPointNames`<sup>Optional</sup> <a name="s3AccessPointNames" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.s3AccessPointNames"></a>

```typescript
public readonly s3AccessPointNames: S3AccessPointNames;
```

- *Type:* <a href="#cdk-comprehend-s3olap.S3AccessPointNames">S3AccessPointNames</a>

The names of the S3 access points for the access control case and redaction case.

---

##### `surveyBucketPrefix`<sup>Optional</sup> <a name="surveyBucketPrefix" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.surveyBucketPrefix"></a>

```typescript
public readonly surveyBucketPrefix: string;
```

- *Type:* string
- *Default:* 6 random words

The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the access control case.

---

##### `transcriptsBucketPrefix`<sup>Optional</sup> <a name="transcriptsBucketPrefix" id="cdk-comprehend-s3olap.ComprehendS3olabProps.property.transcriptsBucketPrefix"></a>

```typescript
public readonly transcriptsBucketPrefix: string;
```

- *Type:* string
- *Default:* 6 random words

The prefix attached to the name of the S3 bucket where you are going to explore the S3 Object Lambda pertaining to the redaction case.

---

### CustSupportRoleProps <a name="CustSupportRoleProps" id="cdk-comprehend-s3olap.CustSupportRoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.CustSupportRoleProps.Initializer"></a>

```typescript
import { CustSupportRoleProps } from 'cdk-comprehend-s3olap'

const custSupportRoleProps: CustSupportRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRoleProps.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | The name of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRoleProps.property.objectLambdaAccessPointName">objectLambdaAccessPointName</a></code> | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. |
| <code><a href="#cdk-comprehend-s3olap.CustSupportRoleProps.property.policyName">policyName</a></code> | <code>string</code> | The name of the IAM policy for the IAM role. |

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-comprehend-s3olap.CustSupportRoleProps.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* 'RedactionCustSupportRole'

The name of the IAM role.

---

##### `objectLambdaAccessPointName`<sup>Optional</sup> <a name="objectLambdaAccessPointName" id="cdk-comprehend-s3olap.CustSupportRoleProps.property.objectLambdaAccessPointName"></a>

```typescript
public readonly objectLambdaAccessPointName: string;
```

- *Type:* string
- *Default:* 'custsupport-s3olap-call-transcripts-known-pii'

The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="cdk-comprehend-s3olap.CustSupportRoleProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string
- *Default:* 'customersupport-role-s3olap-policy'

The name of the IAM policy for the IAM role.

---

### GeneralRoleProps <a name="GeneralRoleProps" id="cdk-comprehend-s3olap.GeneralRoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.GeneralRoleProps.Initializer"></a>

```typescript
import { GeneralRoleProps } from 'cdk-comprehend-s3olap'

const generalRoleProps: GeneralRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.GeneralRoleProps.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | The name of the IAM role. |
| <code><a href="#cdk-comprehend-s3olap.GeneralRoleProps.property.objectLambdaAccessPointName">objectLambdaAccessPointName</a></code> | <code>string</code> | The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration. |
| <code><a href="#cdk-comprehend-s3olap.GeneralRoleProps.property.policyName">policyName</a></code> | <code>string</code> | The name of the IAM policy for the IAM role. |

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-comprehend-s3olap.GeneralRoleProps.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* 'GeneralRole'

The name of the IAM role.

---

##### `objectLambdaAccessPointName`<sup>Optional</sup> <a name="objectLambdaAccessPointName" id="cdk-comprehend-s3olap.GeneralRoleProps.property.objectLambdaAccessPointName"></a>

```typescript
public readonly objectLambdaAccessPointName: string;
```

- *Type:* string
- *Default:* 'accessctl-s3olap-survey-results-unknown-pii'

The name of the object Lambda access point, which will be the same as the S3 acceess point for the S3 bucket in the demostration.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="cdk-comprehend-s3olap.GeneralRoleProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string
- *Default:* 'general-role-s3olap-policy'

The name of the IAM policy for the IAM role.

---

### LambdaArnCaptorResourceProps <a name="LambdaArnCaptorResourceProps" id="cdk-comprehend-s3olap.LambdaArnCaptorResourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.LambdaArnCaptorResourceProps.Initializer"></a>

```typescript
import { LambdaArnCaptorResourceProps } from 'cdk-comprehend-s3olap'

const lambdaArnCaptorResourceProps: LambdaArnCaptorResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorResourceProps.property.partialLambdaName">partialLambdaName</a></code> | <code>string</code> | The partial fixed name of the gemeral Lambda function created from the serverless application. |
| <code><a href="#cdk-comprehend-s3olap.LambdaArnCaptorResourceProps.property.roleName">roleName</a></code> | <code>string</code> | the name of the corresponding IAM role. |

---

##### `partialLambdaName`<sup>Required</sup> <a name="partialLambdaName" id="cdk-comprehend-s3olap.LambdaArnCaptorResourceProps.property.partialLambdaName"></a>

```typescript
public readonly partialLambdaName: string;
```

- *Type:* string

The partial fixed name of the gemeral Lambda function created from the serverless application.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdk-comprehend-s3olap.LambdaArnCaptorResourceProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

the name of the corresponding IAM role.

---

### RedactionLambdaProps <a name="RedactionLambdaProps" id="cdk-comprehend-s3olap.RedactionLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.RedactionLambdaProps.Initializer"></a>

```typescript
import { RedactionLambdaProps } from 'cdk-comprehend-s3olap'

const redactionLambdaProps: RedactionLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | The minimum prediction confidence score above which PII classification and detection would be considered as final answer. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.containsPiiEntitiesThreadCount">containsPiiEntitiesThreadCount</a></code> | <code>string</code> | Number of threads to use for calling Comprehend's ContainsPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | Default language of the text to be processed. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.detectPiiEntitiesThreadCount">detectPiiEntitiesThreadCount</a></code> | <code>string</code> | Number of threads to use for calling Comprehend's DetectPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSize">documentMaxSize</a></code> | <code>string</code> | Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSizeContainsPiiEntities">documentMaxSizeContainsPiiEntities</a></code> | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSizeDetectPiiEntities">documentMaxSizeDetectPiiEntities</a></code> | <code>string</code> | Maximum document size (in bytes) to be used for making calls to Comprehend's DetectPiiEntities API. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.isPartialObjectSupported">isPartialObjectSupported</a></code> | <code>string</code> | Whether to support partial objects or not. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.logLevel">logLevel</a></code> | <code>string</code> | Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.maskCharacter">maskCharacter</a></code> | <code>string</code> | A character that replaces each character in the redacted PII entity. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.maskMode">maskMode</a></code> | <code>string</code> | Specifies whether the PII entity is redacted with the mask character or the entity type. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.maxCharsOverlap">maxCharsOverlap</a></code> | <code>string</code> | Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | List of comma separated PII entity types to be considered for redaction. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.publishCloudWatchMetrics">publishCloudWatchMetrics</a></code> | <code>string</code> | True if publish metrics to Cloudwatch, false otherwise. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | The version of the serverless application. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.subsegmentOverlappingTokens">subsegmentOverlappingTokens</a></code> | <code>string</code> | Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit. |
| <code><a href="#cdk-comprehend-s3olap.RedactionLambdaProps.property.unsupportedFileHandling">unsupportedFileHandling</a></code> | <code>string</code> | Handling logic for Unsupported files. |

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string
- *Default:* '0.5'

The minimum prediction confidence score above which PII classification and detection would be considered as final answer.

Valid range (0.5 to 1.0).

---

##### `containsPiiEntitiesThreadCount`<sup>Optional</sup> <a name="containsPiiEntitiesThreadCount" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.containsPiiEntitiesThreadCount"></a>

```typescript
public readonly containsPiiEntitiesThreadCount: string;
```

- *Type:* string
- *Default:* '20'

Number of threads to use for calling Comprehend's ContainsPiiEntities API.

This controls the number of simultaneous calls that will be made from this Lambda.

---

##### `defaultLanguageCode`<sup>Optional</sup> <a name="defaultLanguageCode" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string
- *Default:* 'en'

Default language of the text to be processed.

This code will be used for interacting with Comprehend.

---

##### `detectPiiEntitiesThreadCount`<sup>Optional</sup> <a name="detectPiiEntitiesThreadCount" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.detectPiiEntitiesThreadCount"></a>

```typescript
public readonly detectPiiEntitiesThreadCount: string;
```

- *Type:* string
- *Default:* '8'

Number of threads to use for calling Comprehend's DetectPiiEntities API.

This controls the number of simultaneous calls that will be made from this Lambda.

---

##### `documentMaxSize`<sup>Optional</sup> <a name="documentMaxSize" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSize"></a>

```typescript
public readonly documentMaxSize: string;
```

- *Type:* string
- *Default:* '102400'

Default maximum document size (in bytes) that this function can process otherwise will throw exception for too large document size.

---

##### `documentMaxSizeContainsPiiEntities`<sup>Optional</sup> <a name="documentMaxSizeContainsPiiEntities" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSizeContainsPiiEntities"></a>

```typescript
public readonly documentMaxSizeContainsPiiEntities: string;
```

- *Type:* string
- *Default:* '50000'

Maximum document size (in bytes) to be used for making calls to Comprehend's ContainsPiiEntities API.

---

##### `documentMaxSizeDetectPiiEntities`<sup>Optional</sup> <a name="documentMaxSizeDetectPiiEntities" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.documentMaxSizeDetectPiiEntities"></a>

```typescript
public readonly documentMaxSizeDetectPiiEntities: string;
```

- *Type:* string
- *Default:* '5000'

Maximum document size (in bytes) to be used for making calls to Comprehend's DetectPiiEntities API.

---

##### `isPartialObjectSupported`<sup>Optional</sup> <a name="isPartialObjectSupported" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.isPartialObjectSupported"></a>

```typescript
public readonly isPartialObjectSupported: string;
```

- *Type:* string
- *Default:* 'false'

Whether to support partial objects or not.

Accessing partial object through http headers such byte-range can corrupt the object and/or affect PII detection accuracy.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string
- *Default:* 'INFO'

Log level for Lambda function logging, e.g., ERROR, INFO, DEBUG, etc.

---

##### `maskCharacter`<sup>Optional</sup> <a name="maskCharacter" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.maskCharacter"></a>

```typescript
public readonly maskCharacter: string;
```

- *Type:* string
- *Default:* '*'

A character that replaces each character in the redacted PII entity.

---

##### `maskMode`<sup>Optional</sup> <a name="maskMode" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.maskMode"></a>

```typescript
public readonly maskMode: string;
```

- *Type:* string

Specifies whether the PII entity is redacted with the mask character or the entity type.

Valid values - REPLACE_WITH_PII_ENTITY_TYPE and MASK.

---

##### `maxCharsOverlap`<sup>Optional</sup> <a name="maxCharsOverlap" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.maxCharsOverlap"></a>

```typescript
public readonly maxCharsOverlap: string;
```

- *Type:* string
- *Default:* '200'

Maximum characters to overlap among segments of a document in case chunking is needed because of maximum document size limit.

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string
- *Default:* 'ALL'

List of comma separated PII entity types to be considered for redaction.

Refer Comprehend's documentation page for list of supported PII entity types.

---

##### `publishCloudWatchMetrics`<sup>Optional</sup> <a name="publishCloudWatchMetrics" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.publishCloudWatchMetrics"></a>

```typescript
public readonly publishCloudWatchMetrics: string;
```

- *Type:* string
- *Default:* 'true'

True if publish metrics to Cloudwatch, false otherwise.

See README.md for details on CloudWatch metrics.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string
- *Default:* '1.0.2'

The version of the serverless application.

---

##### `subsegmentOverlappingTokens`<sup>Optional</sup> <a name="subsegmentOverlappingTokens" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.subsegmentOverlappingTokens"></a>

```typescript
public readonly subsegmentOverlappingTokens: string;
```

- *Type:* string
- *Default:* '20'

Number of tokens/words to overlap among segments of a document in case chunking is needed because of maximum document size limit.

---

##### `unsupportedFileHandling`<sup>Optional</sup> <a name="unsupportedFileHandling" id="cdk-comprehend-s3olap.RedactionLambdaProps.property.unsupportedFileHandling"></a>

```typescript
public readonly unsupportedFileHandling: string;
```

- *Type:* string
- *Default:* 'FAIL'

Handling logic for Unsupported files.

Valid values are PASS and FAIL.

---

### S3AccessPointNames <a name="S3AccessPointNames" id="cdk-comprehend-s3olap.S3AccessPointNames"></a>

#### Initializer <a name="Initializer" id="cdk-comprehend-s3olap.S3AccessPointNames.Initializer"></a>

```typescript
import { S3AccessPointNames } from 'cdk-comprehend-s3olap'

const s3AccessPointNames: S3AccessPointNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-comprehend-s3olap.S3AccessPointNames.property.admin">admin</a></code> | <code>string</code> | The name of the S3 aceess point for the admin role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.S3AccessPointNames.property.billing">billing</a></code> | <code>string</code> | The name of the S3 aceess point for the billing role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.S3AccessPointNames.property.customerSupport">customerSupport</a></code> | <code>string</code> | The name of the S3 aceess point for the customer support role in the redaction case. |
| <code><a href="#cdk-comprehend-s3olap.S3AccessPointNames.property.general">general</a></code> | <code>string</code> | The name of the S3 aceess point for the general role in the access control case. |

---

##### `admin`<sup>Required</sup> <a name="admin" id="cdk-comprehend-s3olap.S3AccessPointNames.property.admin"></a>

```typescript
public readonly admin: string;
```

- *Type:* string
- *Default:* 'admin-s3-access-point-call-transcripts-known-pii'

The name of the S3 aceess point for the admin role in the redaction case.

---

##### `billing`<sup>Required</sup> <a name="billing" id="cdk-comprehend-s3olap.S3AccessPointNames.property.billing"></a>

```typescript
public readonly billing: string;
```

- *Type:* string
- *Default:* 'bill-s3-access-point-call-transcripts-known-pii'

The name of the S3 aceess point for the billing role in the redaction case.

---

##### `customerSupport`<sup>Required</sup> <a name="customerSupport" id="cdk-comprehend-s3olap.S3AccessPointNames.property.customerSupport"></a>

```typescript
public readonly customerSupport: string;
```

- *Type:* string
- *Default:* 'cs-s3-access-point-call-transcripts-known-pii'

The name of the S3 aceess point for the customer support role in the redaction case.

---

##### `general`<sup>Required</sup> <a name="general" id="cdk-comprehend-s3olap.S3AccessPointNames.property.general"></a>

```typescript
public readonly general: string;
```

- *Type:* string
- *Default:* 'accessctl-s3-ap-survey-results-unknown-pii'

The name of the S3 aceess point for the general role in the access control case.

---



## Enums <a name="Enums" id="Enums"></a>

### IamRoleName <a name="IamRoleName" id="cdk-comprehend-s3olap.IamRoleName"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-comprehend-s3olap.IamRoleName.GENERAL">GENERAL</a></code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.IamRoleName.ADMIN">ADMIN</a></code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.IamRoleName.BILLING">BILLING</a></code> | *No description.* |
| <code><a href="#cdk-comprehend-s3olap.IamRoleName.CUST_SUPPORT">CUST_SUPPORT</a></code> | *No description.* |

---

##### `GENERAL` <a name="GENERAL" id="cdk-comprehend-s3olap.IamRoleName.GENERAL"></a>

---


##### `ADMIN` <a name="ADMIN" id="cdk-comprehend-s3olap.IamRoleName.ADMIN"></a>

---


##### `BILLING` <a name="BILLING" id="cdk-comprehend-s3olap.IamRoleName.BILLING"></a>

---


##### `CUST_SUPPORT` <a name="CUST_SUPPORT" id="cdk-comprehend-s3olap.IamRoleName.CUST_SUPPORT"></a>

---

