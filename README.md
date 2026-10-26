# HireHub

HireHub is a responsive job-search dashboard — a "job board command center" — built with
React and Vite. It brings searching, filtering, reviewing, and saving job listings into a
single workspace.

> **Demo data:** HireHub is designed to run on sample job listings served by a simulated API.
> Companies, vacancies, and salaries shown in the app are illustrative only — they are not
> live or verified job postings.

## Status

Early development. The application skeleton is in place: routing, a base layout, Tailwind
CSS styling, ESLint, and a Vitest + React Testing Library test setup. Pages currently render
placeholder content; the features listed below are planned.

## Planned features

- Search by job title, company, location, and skills
- Multi-tag filtering (work arrangement, employment type, experience level, salary, date
  posted, skills) with removable filter chips and clear-all
- Sorting and pagination that work together with search and filters
- Job details page and saved jobs persisted in `localStorage`
- Dashboard metrics computed from the listing data
- Simulated API with loading skeletons, error handling with retry, and empty states
- Accessible, keyboard-friendly, responsive layout for desktop, tablet, and mobile

## Tech stack

| Area        | Tooling                                                       |
| ----------- | ------------------------------------------------------------- |
| UI          | React 19, React Router 8                                      |
| Build / dev | Vite 8                                                        |
| Styling     | Tailwind CSS 4 (via `@tailwindcss/vite`)                      |
| Linting     | ESLint 10 (flat config) with React Hooks, React Refresh, and JSX a11y rules |
| Testing     | Vitest 5, React Testing Library, jsdom                        |

## Getting started

**Prerequisites:** Node.js 22.22 or newer (Node 24 LTS recommended) and npm.

```powershell
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Start the Vite development server                |
| `npm run build`      | Create a production build in `dist/`             |
| `npm run preview`    | Serve the production build locally               |
| `npm run lint`       | Run ESLint on the project                        |
| `npm test`           | Run the test suite once                          |
| `npm run test:watch` | Run tests in watch mode                          |

## Project structure

```text
public/                 Static assets (favicon)
src/
  app/                  App root and route definitions
    App.jsx             Creates the browser router
    router.jsx          Route objects (shared with tests)
  components/
    layout/             App shell (header, navigation, main region)
    jobs/               Job cards and job-related UI
    filters/            Search and filter controls
    dashboard/          Dashboard metric components
    feedback/           Loading, error, and empty states
    ui/                 Reusable UI primitives
  context/              React context providers
  data/                 Mock job data
  hooks/                Custom hooks
  pages/                Route-level page components
  services/             Simulated API service layer
  styles/               Global styles and Tailwind entry point
  test/                 Test setup and test suites
  utils/                Pure helpers (filtering, sorting, formatting)
  main.jsx              Application entry point
```

Empty folders contain a `.gitkeep` file until their first module is added.

## Routes

| Path           | Page          |
| -------------- | ------------- |
| `/`            | Dashboard     |
| `/jobs`        | Discover Jobs |
| `/jobs/:jobId` | Job Details   |
| `/saved`       | Saved Jobs    |
| any other path | Not Found     |

## Testing

Tests run in a jsdom environment with Vitest and React Testing Library. Test files live in
`src/test/` and match `*.test.js` / `*.test.jsx`; `src/test/setup.js` registers the
`jest-dom` matchers and cleans up after each test.

```powershell
npm test
```

Route tests mount the shared route objects from `src/app/router.jsx` in a memory router, so
they exercise the same routes as the running app.

## Git workflow

Work happens on feature branches (`feature/account1/...`, `feature/account2/...`) and is
merged into `main` only after it has been reviewed, linted, tested, and built successfully.
