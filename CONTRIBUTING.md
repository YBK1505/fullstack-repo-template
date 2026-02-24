# Contributing Guide

Thank you for contributing! This document explains how to work with this codebase.

---

## Branching Strategy

This project follows a simplified Git Flow:

```
main          -> production-ready code only
develop       -> integration branch, all features merge here first
feature/*     -> new features (e.g. feature/user-auth)
bugfix/*      -> bug fixes (e.g. bugfix/login-redirect)
hotfix/*      -> urgent fixes applied directly to main
release/*     -> release preparation
```

**Rules:**
- Never commit directly to `main` or `develop`.
- All changes go through a pull request.
- PRs into `main` require at least 1 approval and passing CI.

---

## Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>
```

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no feature/fix |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies |

**Examples:**

```
feat(auth): add JWT refresh token support
fix(api): handle missing product SKU on create
docs(readme): update environment variable table
chore(deps): upgrade express to 4.19.0
```

---

## Pull Request Process

1. Create a branch from `develop` using the naming convention above.
2. Make your changes with tests where relevant.
3. Ensure CI passes locally: `npm test` in both `server/` and `client/`.
4. Open a PR against `develop` (not `main`).
5. Fill in the PR template fully.
6. Request review from at least one team member.
7. Squash and merge once approved.

---

## Code Style

- Follow the ESLint config in each package.
- React: functional components and hooks only. No class components.
- File naming: `camelCase.js` for utilities, `PascalCase.jsx` for React components.
- Import order: Node built-ins, then third-party, then internal.

---

## Reporting Issues

Use the GitHub Issues tab and choose the appropriate template. Search existing issues before opening a new one.
