# Simple AWS Config

A library to define environment-specific settings for AWS CDK using cdk.json

## Install

`yarn add --dev aws-cdk-config`

## Usage

### cdk.json format:

```
{
    [...]
    context: {
        "updateFrequencyMinutes": {
            "dev": 15,
            "prod": 5
        },
        "dnsEntries": {
            "dev": {
                "baseName": "domain.dev",
            },
            "prod": {
                "baseName": "domain.com",
            }
        },
        "projectName": "myProject"
        [...]
    }
}
```

### Setting up the config in your app entrypoint:

```
import { Config } from "aws-cdk-config";
import { App } from "aws-cdk-lib";

const app = new App();
const config = new Config(app);
```

### Retrieving values from config:

```
config.getEnvParam("updateFrequencyMinutes"); //Will vary based on being dev, prod, etc.
config.getEnvParam("dnsEntries").baseName; //Will vary based on being dev, prod, etc.
config.getParam("projectName");    //Will be the same across all environments
```
