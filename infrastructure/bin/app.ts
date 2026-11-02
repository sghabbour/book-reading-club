#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BookClubStack } from '../lib/book-club-stack';

const app = new cdk.App();

new BookClubStack(app, 'BookClubStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
