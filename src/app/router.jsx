import AppLayout from '../components/layout/AppLayout.jsx'
import DashboardPage from '../pages/DashboardPage.jsx'
import DiscoverJobsPage from '../pages/DiscoverJobsPage.jsx'
import JobDetailsPage from '../pages/JobDetailsPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import SavedJobsPage from '../pages/SavedJobsPage.jsx'

// Route objects are exported separately from the router instance so tests
// can mount them in a memory router.
export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'jobs', element: <DiscoverJobsPage /> },
      { path: 'jobs/:jobId', element: <JobDetailsPage /> },
      { path: 'saved', element: <SavedJobsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
