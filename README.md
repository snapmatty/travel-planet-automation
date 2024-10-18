

## Description
This project contains end-to-end tests for the Travel Planet website and its other domains.

## Features

- Page Object Model approach
- Automated Feature tests (Offer Selection path, Login path, Destination and Date Selection path, Basic functionalities check)
- Cross Domain 


## Installation

1. Clone the repository 
```
git clone https://github.com/your-username/travel-planet-e2e-tests.git
```
2. Install dependencies: npm install or yarn install

OR install every package individually:
2.1 Install Playwright:

https://nodejs.org/en/download/package-manager

```bash
  npm install 
  npm init playwright@latest
```
to confirm that playwright has been installed properly:
```bash
  npx playwright test
```

2.2 Install faker

```bash
  npm install faker
```

to confirm that faker has been installed properly:
```bash
  npm faker --version
```
    
## Authors

- [@snapmatty](https://www.github.com/snapmatty)




**Content:**

* `helpers/fixtures.js`: contains test fixtures and setup functions for the tests.
* `helpers/test.data.js`: contains test data used throughout the tests.
* `tests/offer-selection.test.js`: contains the end-to-end test for the offer selection feature.
* `tests/results-page.test.js`: contains the end-to-end test for the results page feature.
* `tests/reservation-page.test.js`: contains the end-to-end test for the reservation page feature.

**Test Structure:**

* Each test file contains a single test suite, which is defined using the `test.describe` function.
* Each test suite contains multiple test steps, which are defined using the `test.step` function.
* Each test step contains a brief description of the test, as well as the test code itself.

**Test Environment:**

* The tests are run using the Playwright test runner.
* The tests use the `page` object to interact with the Travel Planet website.
* The tests use the `expect` function to assert that the website behaves as expected.


