# Git Branch Strategy for React Native / Expo Project

This repository uses a **branch-driven deployment model** aligned with:

- **GitHub Actions** → policy, quality, and communication
- **EAS Workflows** → OTA updates, native builds, and distribution

All automation derives from **branch intent**.

---

## 📌 Source of Truth

This document is the **single source of truth** for:

- Allowed branch flows
- Deployment behavior
- CI/CD responsibilities
- Versioning + release process

It is enforced by:

- GitHub branch protection rulesets
- PR Branch Guard workflow
- CI workflow checks
- EAS Build & EAS Update workflows

---

## 🌿 Branch Structure

```
main (production)
├── staging (pre-production / QA)
├── develop (integration)
│   ├── feature/*
│   ├── bugfix/*
│   ├── refactor/*
│   ├── docs/*
│   ├── test/*
│   └── chore/*
├── hotfix/*
└── release/* (optional)
```

---

## 📋 Branch Types & Responsibilities

### 1) `main` — Production (Protected)

**Purpose**

- Production-ready code only.

**Deployments**

- Native builds via **EAS Build** (production profile)
- App Store / Play Store distribution
- GitHub Releases (notes)

**Allowed PR sources into `main`**

- `staging`
- `hotfix/*`
- `release/*`

**What should land here**

- Fully tested code that passed QA on `staging`
- Hotfixes that were verified

**Automation**

- CI
- Smart Build (production profile on tags / manual)
- Release notes (release.yml)
- Version bump verification for `staging → main` and `hotfix/* → main`

---

### 2) `staging` — QA / Pre-Production (Protected)

**Purpose**

- Final verification before production.

**Deployments**

- EAS Updates (typically preview/staging channel depending on your mapping)

**Allowed PR sources into `staging`**

- `develop`
- `hotfix/*`

**Automation**

- CI
- Smart Update (OTA)

---

### 3) `develop` — Integration (Protected)

**Purpose**

- Integration branch for ongoing work.

**Deployments**

- EAS Updates (preview channel) for internal testing.

**Allowed PR sources into `develop`**

- `feature/*`, `bugfix/*`, `refactor/*`, `docs/*`, `test/*`, `chore/*`
- `hotfix/*` (propagation)
- `release/*` (cross-propagation)

**Automation**

- CI
- Smart Update (OTA)

---

### 4) `feature/*` — Feature Development (Short-lived)

**Purpose**

- New functionality.

**Lifecycle**

1. Branch from `develop`
2. Implement feature
3. Open PR → `develop`
4. CI + review
5. Merge & delete branch

**Automation**

- CI on push + PR
- (Optional) EAS Update per branch (if you keep branch updates for feature branches)

---

### 5) `bugfix/*` — Non-Critical Fixes (Short-lived)

Same lifecycle as `feature/*`, but for non-critical fixes.

---

### 6) `hotfix/*` — Critical Production Fixes (Short-lived)

**Purpose**

- Emergency fixes for production.

**Lifecycle**

1. Branch from `main`
2. Fix issue
3. PR → `main`
4. After merge:
   - Propagate to `develop`
   - Propagate to `staging`
5. Delete branch

**Automation**

- CI
- Smart Build (production profile)
- Hotfix Propagation Notifier (SOP comment)

---

### 7) `release/*` — Release Stabilization (Optional)

**Purpose**

- Stabilize a release before production when you need a longer QA cycle.

**Rules**

- Bug fixes only
- No new features

**Lifecycle**

1. Branch from `develop`
2. Stabilize (fixes, version bump prep)
3. PR → `staging` (QA)
4. PR → `main` (release)
5. Merge back to `develop`
6. Delete branch

---

## 🔄 Branch Flow Rules (Enforced)

| Target Branch | Allowed Sources                                                                               |
| ------------- | --------------------------------------------------------------------------------------------- |
| `main`        | `staging`, `hotfix/*`, `release/*`                                                            |
| `staging`     | `develop`, `hotfix/*`, `release/*` _(optional)_                                               |
| `develop`     | `feature/*`, `bugfix/*`, `refactor/*`, `docs/*`, `test/*`, `chore/*`, `hotfix/*`, `release/*` |

> Enforcement is done by **PR Branch Guard** and branch protection rules.

---

## 🔐 Branch Protection Rules (Recommended)

> These should mirror your `.github/rulesets/*.json` files.

### `main`

- Require **2 approvals**
- Require status checks:
  - CI / Lint & Type Check
  - CI / Run Tests
  - CI / Build App
  - PR Branch Guard
  - Check Version Bump _(when applicable)_
- No direct pushes
- No force pushes
- Include administrators

### `staging`

- Require **1 approval**
- Require status checks:
  - CI / Lint & Type Check
  - CI / Run Tests
  - PR Branch Guard
- No direct pushes

### `develop`

- Require **1 approval**
- Require status checks:
  - CI / Lint & Type Check
  - CI / Run Tests
  - PR Branch Guard
- No direct pushes

---

## 📱 Deployment Channels Mapping (EAS)

### OTA Updates (EAS Update)

| Git Branch  | EAS Update Branch / Channel              | Purpose            |
| ----------- | ---------------------------------------- | ------------------ |
| `develop`   | `preview`                                | Internal testing   |
| `staging`   | `preview` _(or `staging` if you add it)_ | QA                 |
| `feature/*` | same as git branch _(optional)_          | Per-branch testing |
| `bugfix/*`  | same as git branch _(optional)_          | Per-branch testing |

> If you want to avoid clutter in EAS branches, disable per-branch updates and keep updates only for `develop` + `staging`.

### Native Builds (EAS Build)

| Git Branch / Trigger                   | Profile                   | When               |
| -------------------------------------- | ------------------------- | ------------------ |
| Tag `v*`                               | `production`              | Store-ready builds |
| Push to `main` / `hotfix/*` (optional) | `preview` or `production` | As configured      |
| Manual dispatch                        | select                    | On-demand          |

---

## 🏷️ Versioning & Releases

### Semantic Versioning

```
vMAJOR.MINOR.PATCH
```

Examples:

- `v1.2.3`
- `v1.3.0`
- `v2.0.0`

### Release Process

1. Merge `develop → staging` (QA)
2. Merge `staging → main`
3. Ensure `package.json` version is bumped
4. Tag release:

```bash
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```

This triggers:

- **Smart Build** (EAS build)
- **Release** workflow (release notes)

---

## 🔄 Git Flow Diagrams

### Feature Development Flow

```
develop ──────●────────●────────●─────────●──────────────>
              │        │        │         │
feature/A ────●────●───┘        │         │
                   PR           │         │
feature/B ──────────────────────●────●────┘
                                     PR
```

### Release Flow

```
develop ───────────────●───────────────>
                        │
                        │ PR
                        ▼
staging ───────────────●───────────────>
                        │
                        │ PR
                        ▼
main ──────────────────●───────────────>
```

### Hotfix Flow

```
main ────────────●─────────────●────────>
                 │             │
hotfix/* ────────┘             │
                               ├─ propagate → develop
                               └─ propagate → staging
```

---

## 🎨 Naming Conventions

Format:

```
<type>/<short-description>
```

Allowed types:

- `feature/`
- `bugfix/`
- `hotfix/`
- `refactor/`
- `docs/`
- `test/`
- `chore/`
- `release/`

Examples:

- `feature/user-authentication`
- `bugfix/login-validation`
- `hotfix/payment-crash-ios`
- `refactor/api-client-structure`
- `docs/update-branch-strategy`
- `test/add-auth-tests`
- `chore/update-deps`

Avoid:

```
fix
test123
john-branch
updates
```

---

## 🎯 Typical Workflows

### Start a new feature

```bash
git checkout develop
git pull origin develop

git checkout -b feature/user-settings

# work + commit
git add .
git commit -m "feat: add user settings"

git push -u origin feature/user-settings
# open PR → develop
```

### Promote to staging (QA)

```bash
# via PR: develop → staging
```

### Release to production

```bash
# via PR: staging → main
# then tag

git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```

### Hotfix

```bash
git checkout main
git pull origin main

git checkout -b hotfix/critical-payment-bug

# fix + commit
git add .
git commit -m "fix: resolve payment crash"

git push -u origin hotfix/critical-payment-bug
# open PR → main
```

---

## ✅ Best Practices

- Keep branches short-lived
- Prefer **squash merge**
- Rebase feature branches on `develop` when needed
- Use Conventional Commits:
  - `feat:` `fix:` `docs:` `refactor:` `test:` `chore:`

---

## ✅ Final Note

This strategy is:

- Expo-native
- CI-clean
- Deterministic
- Enforced by automation
- Easy for humans to follow
