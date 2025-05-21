# my-jest-project

## Jest Harjoitus 1b

This project contains Jest test suites for JavaScript exercises from the first-year curriculum, specifically focusing on Harjoitus 2.4 tasks 2, 3, 4, and 5.

### What’s done in this project?

- Created a new branch `jest-harjoitus1b` for adding Jest tests.
- Refactored exercise functions to return values instead of logging to console for testability.
- Implemented Jest tests covering tasks 2, 3, 4, and 5 from Harjoitus 2.4.
- Verified that all tests pass successfully.

### Testability of Harjoitus 2.3 tasks

During the work, I reviewed Harjoitus 2.3 to see which tasks can be tested with Jest:

| Task Number | Testable? | Notes                                             |
|-------------|-----------|--------------------------------------------------|
| Task 1      | Yes       | Pure functions returning values, easy to test    |
| Task 2      | No        | Uses `console.log` without return; output testing is difficult in Jest |
| Task 3      | Yes       | Refactored to return values, suitable for testing|
| Task 4      | No        | Heavy DOM manipulation, better suited for integration or browser testing |
| Task 5      | No        | Dependent on asynchronous or external user input |

### Summary

All targeted tasks from Harjoitus 2.4 (2, 3, 4, and 5) were successfully tested with Jest by refactoring code as needed. Some tasks in Harjoitus 2.3 remain untested due to their reliance on console output or DOM-related side effects.

---

## How to run tests

npm install
npm test
