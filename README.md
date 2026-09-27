# Playwright POM Automation Boilerplate

A scalable end-to-end web automation testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This repository features a data-driven localization testing matrix capable of validating multi-language web assets (English, French, and German) seamlessly.

---

## 🏗️ Project Architecture

The repository enforces a strict separation of concerns, isolating your structural test assertions from underlying UI layout elements and localized data layers:

```text
├── src/
│   ├── locales/            # Localization static translation dictionaries
│   │   ├── en.json         # English UI text maps
│   │   ├── fr.json         # French UI text maps
│   │   └── de.json         # German UI text maps
│   ├── pages/              # Page Object Model (POM) classes
│   │   └── ParasoftContactPage.ts
│   └── tests/              # Test specification suites
│       └── RegistrationPage.spec.ts
├── package.json            # Node dependencies and execution test scripts
├── package-lock.json
└── playwright.config.ts    # Global Playwright multi-browser profile engine configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) installed on your machine.

### 2. Installation
Clone the repository, navigate into your root workspace directory, and install the required dependencies along with the Playwright browser binaries:

```bash
# Install package dependencies
npm install

# Download and install required Playwright test browsers
npx playwright install
```

---

## 🧪 Running Tests

You can execute your test suites using the configured script definitions managed in your `package.json`.

### Run the Registration Localization Tests
To run your data-driven multi-language matrix tests specifically from the `RegistrationPage.spec.ts` suite in headless mode, execute:

```bash
npm run test:registration
```

### Alternative Run Profiles
* **Run in Headed Window Mode (See browser actions visually):**
  ```bash
  npm run test:registration:headed
  ```

---

## 🛠️ Development Coding Standards

When expanding this repository, adhere strictly to the following framework choices:
- **Locators:** Prioritize robust, user-accessible locators like `page.getByRole()` or `page.getByText()` over highly volatile raw CSS/XPath coordinates.
- **Strict Typing:** Declare explicit TypeScript structures. Avoid dropping loose `any` signatures across constructors or methods.
- **Asynchronous Chains:** Maintain orderly, descriptive method signatures prefixed with behavioral verbs (e.g., `verifyLanguageHeader()`), wrapping steps cleanly using `async/await`.
