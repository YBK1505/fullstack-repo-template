# Project Name

> Short one-line description of your project.

[![CI](https://github.com/YBK1505/fullstack-repo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/YBK1505/fullstack-repo-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Overview

Replace this section with a 2-3 sentence description of what the project does and who it's for.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router, Tailwind CSS |
| Backend | Node.js, Express |
| Testing | Jest, React Testing Library |
| CI/CD | GitHub Actions |

---

## Project Structure

```
project-root/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── .env.example
│   └── package.json
├── server/                 # Node.js / Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env.example
│   └── package.json
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

### Running Locally

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm start
```

Frontend: `http://localhost:3000` | Backend: `http://localhost:5000`

---

## Running Tests

```bash
cd server && npm test
cd client && npm test
```

---

## Branch Protection Rules

Apply these in **Settings > Branches > Add rule** for both `main` and `develop`.

| Rule | Recommended Setting |
|---|---|
| Require pull request before merging | Enabled |
| Required approvals | 1+ |
| Dismiss stale reviews on new commits | Enabled |
| Require status checks to pass | `ci / Server Tests`, `ci / Client Tests` |
| Require branches to be up to date | Enabled |
| Allow force pushes | Disabled |
| Allow deletions | Disabled |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branching strategy, commit conventions, and the PR process.

---

## License

MIT. See [LICENSE](./LICENSE).
