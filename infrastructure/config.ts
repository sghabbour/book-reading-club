import * as path from 'node:path';

// Load infrastructure/.env into process.env, no matter where the command is run from.
process.loadEnvFile(path.join(__dirname, '.env'));

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name} in infrastructure/.env (see .env.example)`,
    );
  }
  return value;
}

export const config = {
  cognitoDomainPrefix: required('COGNITO_DOMAIN_PREFIX'),
  appUrls: required('APP_URLS')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),
};
