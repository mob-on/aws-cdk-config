import { App, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class Config {
  public readonly app: App;
  public readonly env: string;

  constructor(app: App, envOverride?: string) {
    this.app = app;
    this.env = envOverride ?? process.env.ENV ?? "dev";
  }

  public getAccount(scope: Construct) {
    return Stack.of(scope).account;
  }

  public getRegion(scope: Construct) {
    return Stack.of(scope).region;
  }

  public getParam(keyName: string) {
    return this.app.node.tryGetContext(keyName);
  }

  public getEnvParam(keyName: string) {
    const param = this.getParam(keyName);
    if (typeof param !== undefined) {
      return param[this.env];
    } else {
      return undefined;
    }
  }

  public getStackProps(props?: StackProps) {
    return {
      ...{
        env: this.getEnvParam("awsEnvDetails"),
        tags: this.getParam("commonTags"),
      },
      ...props,
    };
  }
}
