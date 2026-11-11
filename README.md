
Monorepo managed with npm workspaces.

```
frontend/       # React + TypeScript (Vite)
backend/        # Node.js + Apollo Server (GraphQL)
infrastructure/ # AWS CDK (TypeScript)
```

## Getting started

Requires Node.js 20+.

```sh
npm install
```

### Frontend

```sh
npm run dev:frontend   # http://localhost:5173
npm run dev:phone      # same, plus a network URL to open on a phone on the same Wi-Fi
```

### Backend

```sh
npm run dev:backend    # http://localhost:4000 (GraphQL)
```

### Infrastructure

```sh
npm run synth -w infrastructure
npm run deploy -w infrastructure
```

Deploying requires AWS credentials and a bootstrapped account (`npx cdk bootstrap`).

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run build`     | Build all workspaces                 |
| `npm run typecheck` | Type-check all workspaces            |
