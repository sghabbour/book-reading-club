# Project: The Reading Nook

## Overview

Please read if you need more info: @README.md

```
frontend/       # React + TypeScript (Vite)
backend/        # Node.js + Apollo Server (GraphQL)
infrastructure/ # AWS CDK (TypeScript)
```

## Commands

## Architecture

## Code Style

- Files are named in kebab-case
- Imports are ordered alphabetically (Preffered but not enforced)
- Unused imports should be deleted
- Use 2 space indentation

## Branch Conventions

- Name format: <type>/<issue-number>-<short-slug>, for example feat/12-join-club or fix/27-login-redirect.
- Feature branches are branched from `main`
- Branches types: feat, fix, chore, docs, test, refactor.
- Use the same branch types words as commit prefix.
- Keep one issue per branch.
- changes should be minimal on each commit.
- changes should be relevant to story/epic of the respective branch.
- commits should correctly describe the changes to be pushed/merged

## Workflow rules

- Run lint + tests before declaring work done
- Keep changes minimal; don't refactor unrelated code
- Never commit secrets; config comes from `.env` or any file that includes `.env` in its name
