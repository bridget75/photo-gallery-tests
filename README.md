# Photo Gallery - Playwright Tests

Automated tests for the Photo Gallery application, written using the Playwright testing framework.


## 📦 Setup

1. Clone the repository:
   ```
   git clone https://github.com/bridget75/photo-gallery-tests.git
   cd photo-gallery-tests




2.Install dependencies:
  ```
npm install
 ```


3. Install Playwright browsers:

 ```
npx playwright install
 ```





## ▶️ Running Tests

1. To run the positive login test only:
 ```
npx playwright test tests/login.spec.js
 ```


2. To run all tests:
 ```
npx playwright test
 ```



## ℹ️ Notes

- Browser used: Chromium
- Testing Framework: Playwright
- Tests are located in the tests/ folder.
- For detailed test reports, check the playwright-report folder generated after running tests.
- If you want to run tests with browser UI (headed mode), add --headed flag:

