# MyBookshelf 📚

MyBookshelf is a book-tracking app inspired by GoodReads, offering a better UI and more ways to organize your books. Create custom lists, track your reading, and explore new reads—all with a user-friendly experience.

## Architecture

**1. Folder Structure**

```shell
.
├── public
├── src
│   ├── api # Api functions.
│   ├── components # Abstraction of reusable components.
│   ├── config # Application and Third-party configurations, environment variables, for instance.
│   ├── data # Data layer (currently using TanStack query).
│   ├── pages
├── specs # E2E tests.
│   ├── fixtures # Mocked API responses.
│   ├── page-object-models # Abstractions of pages.
```

**2. Third-Party Abstractions**

Interaction and integration with third parties are abstracted under the data and API layers, such that only the functions inside `src/api` are aware of the implementation details. The rest of the application uses the data layer, which is agnostic.

**3. Colocated Files**

Colocated Files organize related components, utils, and tests together to improve maintainability, discoverability, and encapsulation.

**4. Data Management**

The application's data is pretty simple at this point, so I opted to keep its state in the App component. Should the application grow in complexity, I would use a better data management strategy, such as a React context or even a dedicated library like Redux. Also, I chose to persist the state in the URL so it's easily shareable.

In addition, I'm also relying on TanStack queries caching and expiration capabilities to ensure data does not go stale and is efficiently cached.

## Technical Choices

- React
- Typescript
- Vite
- TailwindCSS
- TanStack Query
- Jest
- Playwright

**1. React + Vite + Typescript**

Vite significantly accelerates development with its fast server start-up and HMR, requiring minimal configuration, making it a good choice.

Typescript adds type safety, which helps catch errors more effectively and write more maintainable code.

**2. TailwindCSS for styling**

TailwindCSS is easy to use and speeds up some UI prototyping. Its ready-to-use design pieces mean less time writing custom code.

**3. Vitest for unit testing**

Vitest has fast test execution and seamless integration with Vite, which reduces potential maintenance effort.

**4. Playwright for end-to-end testing**

Playwright was chosen because it supports multiple browsers, offers powerful features like auto-waiting, and provides robust APIs for simulating user interactions. It's fast and reliable and enables cross-browser testing with a single codebase.


## Development instructions

**Dev environment setup**

Make sure to clone the `.env.example` file and rename it to `.env`.
You'll also need an API token from google, follow their [instructions](https://support.google.com/googleapi/answer/6158862?hl=en).

<details>
 <summary>1. Make sure you are using compatible Node version (v18+)</summary>

```shell
node -v
```

</details>

<details>
 <summary>2. Prepare package manager (I'm using yarn)</summary>
 
  ```shell
  npm install -g yarn
  ```
</details>

<details>
 <summary>3. Install dependencies</summary>
 
  ```shell
  yarn install
  ```
</details>
 
<details>
 <summary>4. Start development</summary>
 
  ```shell
  yarn dev
  ```
</details>

<br/>

## Production readiness checklist

### Overall checklist

- [ ] 1. [Acceptance criteria check](#1-acceptance-criteria-check)
- [ ] 2. [Test coverage check](#2-test-coverage-check)
- [ ] 3. [Performance check](#3-performance-check)
- [ ] 4. [Accessibility check](#4-accessibility-check)
- [ ] 5. [Localization check](#5-localization-check)
- [ ] 6. [Usability testing check](#6-usability-testing-check)
- [ ] 7. [Analytics and monitoring check](#7-analytics-and-monitoring-check)
- [ ] 8. [Documentation check](#8-documentation-check)

### Detailed checklist

#### 1. Acceptance criteria(requirements) check

- [ ] 1.1 Account Creation
  - [ ] 1.1.1 The application displays a Welcome message.
  - [ ] 1.1.1 The application enable an account creation.
- [ ] 1.2 Search Books
  - [ ] 1.2.1 Users can search by book title using a search box.
  - [ ] 1.2.2 Users can search by authors using a search box.
  - [ ] 1.2.3 Users can select the book.
- [ ] 1.3 Create lists
  - [ ] 1.3.1 User can create lists and add books on it.
  - [ ] 1.3.2 Users can remove books from their lists.
- [ ] 1.4 Add Reviews
  - [ ] 1.4.1 Users can add reviews to books that are checked as read.
- [ ] 1.5 Set reading goals
  - [ ] 1.5.1 Users can add reading goals in their dashboard.
- [ ] 1.6 Custom homepage
  - [ ] 1.6.1 Users can select what they want to see on the home page.

#### 2. Test coverage check

- [ ] 2.1 Unit tests for individual components or functions.
  - [ ] 2.1.1 Unit tests for the data layer.
  - [ ] 2.1.2 Unit tests for the API layer.
  - [ ] 2.1.3 Unit tests for critical components.
  - [ ] 2.1.4 Integrate with the accessibility testing library to identify accessibility issues early.
- [ ] 2.2 Integration tests test the interaction between multiple components.
- [ ] 2.3 End-to-end tests to ensure the application meets the specified requirements and functions in all aspects.
  - [ ] 2.3.1 Implement end-to-end user workflow tests on the application.
  - [ ] 2.3.2 Mock third-party APIs to ensure the reliability of the tests.
  - [ ] 2.3.3 Evaluate the application's cross-browser compatibility by testing on various browsers (Firefox, Edge, etc.).
  - [ ] 2.3.4 Evaluate the application's cross-device compatibility by testing on various devices.
- [ ] 2.4 Screenshot tests for visual regressions
- [ ] 2.5 CI/CD
  - [ ] 2.5.1 Integrate those automated tests listed above with the CI/CD pipeline to ensure overall quality.

#### 3. Performance check

- [ ] 3.1 Utilize Chrome Performance Insights to simulate common user environments, ensuring that the Largest Contentful Paint (LCP) and Time to Interactive (TTI) metrics are within acceptable thresholds.

#### 4. Accessibility check

- [ ] 4.1 The application meets WCAG 2.2 AA standards.
- [ ] 4.2 All SVG elements have appropriate alt text and roles for screen readers.
- [ ] 4.3 The application is navigable using a keyboard only.
- [ ] 4.4 Color contrast ratios are sufficient.

#### 5. Localization check

- [ ] 5.1 All the content has been localized.

#### 6. Usability testing check

- [ ] 6.1 Conduct internal usability testing to ensure the outcomes meet specified requirements.

#### 7. Analytics and monitoring check

- [ ] 7.1 Analytics tracking has been implemented for user interactions.
- [ ] 7.2 Real-time monitoring is set up to track application performance and usage.
- [ ] 7.3 Establish a way to collect user feedback to improve the application in the next iteration.

