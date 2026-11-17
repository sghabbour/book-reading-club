function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing ${name} in frontend/.env.local (see .env.example)`,
    );
  }
  return value;
}

export const config = {
  cognitoAuthority: required(
    'VITE_COGNITO_AUTHORITY',
    import.meta.env.VITE_COGNITO_AUTHORITY,
  ),
  cognitoClientId: required(
    'VITE_COGNITO_CLIENT_ID',
    import.meta.env.VITE_COGNITO_CLIENT_ID,
  ),
  cognitoDomain: required(
    'VITE_COGNITO_DOMAIN',
    import.meta.env.VITE_COGNITO_DOMAIN,
  ),
  appUrl: required('VITE_APP_URL', import.meta.env.VITE_APP_URL),
};
