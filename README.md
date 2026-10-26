# HireHub

HireHub is a responsive job-search dashboard — a "job board command center" — built with
React and Vite. It brings searching, filtering, reviewing, and saving job listings into a
single workspace.

> **Demo data:** HireHub is designed to run on sample job listings served by a simulated API.
> Companies, vacancies, and salaries shown in the app are illustrative only — they are not
> live or verified job postings.

## Status

Early development. In place so far:

- Project tooling: Vite, React Router, Tailwind CSS, ESLint, and Vitest + React Testing Library
- The responsive app shell: sidebar navigation on desktop, a slide-over menu on smaller screens,
  and a top bar with a notifications panel and a demo profile
- Brand colors, typography, and a small set of reusable UI components

The pages are still placeholders. They show the planned layout and explain what will appear
there, but there is no job data yet, so no listings, metrics, or saved jobs are shown. The
features below are planned.

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
| Icons       | Lucide React                                                  |
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
    layout/             App shell: sidebar, top bar, mobile menu, primary navigation
    jobs/               Job cards and job-related UI
    filters/            Search and filter controls
    dashboard/          Dashboard components (metric cards)
    feedback/           Loading, error, and empty states
    ui/                 Reusable UI primitives (buttons, cards, badges, page header)
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

## UI foundation

- **Colors:** components use `brand-*` utilities, defined in `src/styles/index.css` as an alias
  of Tailwind's indigo scale. Neutrals use `slate-*`. The light theme is the default.
- **Typography and spacing:** Tailwind's system font stack and spacing scale. Page titles use
  `text-2xl`/`sm:text-3xl`, section titles `text-base font-semibold`, and body text `text-sm`.
- **Layout:** at the `lg` breakpoint (1024px) and up, a fixed 16rem sidebar holds the primary
  navigation. Below it, the sidebar is hidden and the menu button in the top bar opens the
  same navigation in a slide-over built on the native `<dialog>` element. The browser then
  traps focus, closes it on Escape, and makes the page behind it inert.
- **Reusable components** (`src/components/ui`): `Button`, `ButtonLink`, `IconButton` (needs
  an accessible `label`), `Card`, `CardHeader`, `Badge`, `Avatar`, and `PageHeader` (which also
  sets the document title). `EmptyState` (`components/feedback`) and `MetricCard`
  (`components/dashboard`) build on them.
- **Accessibility:** a skip link to the main content, visible focus outlines,
  `aria-current` on the active navigation link, and reduced motion when the operating system
  asks for it.

## Testing

Tests run in a jsdom environment with Vitest and React Testing Library. Test files live in
`src/test/` and match `*.test.js` / `*.test.jsx`:

| File                  | Covers                                                     |
| --------------------- | ---------------------------------------------------------- |
| `routing.test.jsx`    | Routes, document titles, navigation state, skip link        |
| `layout.test.jsx`     | App shell, mobile menu, notifications panel                 |
| `ui.test.jsx`         | Reusable UI components                                      |

```powershell
npm test
```

`src/test/setup.js` registers the `jest-dom` matchers, cleans up after each test, and adds a
minimal `showModal()`/`close()` shim, because jsdom does not implement the `<dialog>` modal
API. Route-level tests use `src/test/renderRoute.jsx`, which mounts the real route objects
from `src/app/router.jsx` in a memory router.

## Git workflow

Work happens on feature branches (`feature/account1/...`, `feature/account2/...`) and is
merged into `main` only after it has been reviewed, linted, tested, and built successfully.
