import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class BookClubStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define AWS resources for the frontend and backend here.
  }
}
