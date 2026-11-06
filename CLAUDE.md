# Project: The Reading Nook

## Overview

Monorepo managed with npm workspaces.

```
frontend/       # React + TypeScript (Vite)
backend/        # Node.js + Apollo Server (GraphQL)
infrastructure/ # AWS CDK (TypeScript)
```

## Commands

## Architecture

## Code Style

- Files are named in kebab-case
- Clean abstract absolute path aliases for import statements
- Imports are ordered alphabitically
- Unused imports should be deleted
- Use 2 space indentation

## Branch Conventions

- Name format: <type>/<issue-number>-<short-slug>, for example feat/12-join-club or fix/27-login-redirect.
- Feature branches are branched from `main`
- Branches types: feat, fix, chore, docs, test, refactor.
- Use the same branch types words as commit prefix.
- Keep one issue per branch and one PR per branch. The PR description includes Closes #12.
- changes should be minimal on each commit.
- changes that are not relevant to the story/epic should not be commited or merged.
- commits that are not correctly describing its changes should not be pushed/merged

## Workflow rules

- Run lint + tests before declaring work done
- Keep changes minimal; don't refactor unrelated code
- Never commit secrets; config comes from `.env` or any file that includes `.env` in its name
