# github-action

# Full-Stack CI/CD Pipeline with Cypress and Render Deployment

## 📚 Overview

This project demonstrates a full-stack application integrated with a CI/CD pipeline using **GitHub Actions**, **Cypress component testing**, and **automatic deployment to Render**. It follows a best-practices workflow that enforces quality gates via tests on pull requests and keeps the main deployment updated with each production push.

---

## 🚀 User Story

> **AS A** software engineer looking to integrate a CI/CD pipeline in a codebase  
> **I WANT** a full-stack application that runs test cases when a Pull Request is made to the `develop` branch and automatically deploys to Render when the code is merged to `main`  
> **SO THAT** I can ensure that all code integrations are clean, pass the proper requirements, and that the application is constantly updated when major releases are made to the `main` branch  

---

## ✅ Acceptance Criteria

- ✅ **GIVEN** a full-stack application  
  **WHEN** I upload new features to the application  
  **THEN** I should be making Pull Requests to a `develop` branch first

- ✅ **WHEN** I create a Pull Request to a `develop` branch  
  **THEN** I should be executing a GitHub Action that runs **Cypress component tests**

- ✅ **WHEN** tests pass  
  **THEN** I should see the test results on GitHub Actions and merge the code

- ✅ **WHEN** I push the code from the `develop` branch to the `main` branch  
  **THEN** another GitHub Action should trigger and automatically **deploy to Render**

---

## ⚙️ Technologies Used

- Node.js + Express (Backend)
- React (Frontend)
- MongoDB via Mongoose
- Cypress (Component Testing)
- GitHub Actions (CI/CD)
- Render (Production Deployment)

---

## 🔄 Workflow Overview

1. **Feature Development**
   - Developers create feature branches off of `develop`
   - Code is committed and pushed to remote

2. **Pull Request to `develop`**
   - PR triggers `ci-cypress.yml` GitHub Action
   - Cypress component tests run
   - Test results visible in GitHub Actions

3. **Merge to `develop`**
   - After successful tests, PR is merged

4. **Push to `main`**
   - Triggers `deploy-render.yml` GitHub Action
   - Automatically deploys latest code to **Render**

---

## 🧪 Cypress Testing (CI)

GitHub Action: `.github/workflows/ci-cypress.yml`

- Runs on `pull_request` targeting `develop`
- Installs dependencies
- Runs Cypress component tests
- Fails the PR if tests do not pass

---

## 🚀 Render Deployment (CD)

GitHub Action: `.github/workflows/deploy-render.yml`

- Runs on `push` to `main`
- Deploys the application to [Render]
- Can be configured using the Render Deploy Hook or API

---

## 📂 Project Structure

server/
└── src/
├── server.ts
├── config/
│ └── connection.ts
└── routes/
client/
└── src/
├── App.jsx
├── components/
└── mocks/
.github/
└── workflows/
├── ci-cypress.yml
└── deploy-render.yml

## 📌 Branch Strategy
main: Production branch — auto-deploys to Render

develop: Integration branch — runs Cypress tests on PR

feature/*: Feature branches — merged into develop via PR

## 📄 License
MIT © 2025 

## Contact Me
email: dball@gmail.com
github: https://github.com/dballard0628/github-action