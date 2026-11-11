#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TheReadingNookStack } from '../lib/the-reading-nook-stack';

const app = new cdk.App();

new TheReadingNookStack(app, 'TheReadingNookStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
