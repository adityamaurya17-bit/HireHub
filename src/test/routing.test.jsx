import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'
import { routes } from '../app/router.jsx'

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
  return router
}

function getPageHeading(name) {
  return screen.getByRole('heading', { level: 1, name })
}

describe('app routing', () => {
  it.each([
    ['/', 'Dashboard'],
    ['/jobs', 'Discover Jobs'],
    ['/saved', 'Saved Jobs'],
  ])('renders the page for %s', (path, heading) => {
    renderAt(path)
    expect(getPageHeading(heading)).toBeInTheDocument()
  })

  it('passes the job id to the job details page', () => {
    renderAt('/jobs/job-42')
    expect(getPageHeading('Job Details')).toBeInTheDocument()
    expect(screen.getByText('job-42')).toBeInTheDocument()
  })

  it('renders the not-found page for unknown routes with a way back', async () => {
    const user = userEvent.setup()
    renderAt('/does-not-exist')
    expect(getPageHeading('Page not found')).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Back to dashboard' }))
    expect(getPageHeading('Dashboard')).toBeInTheDocument()
  })

  it('navigates with the primary nav and marks the active link', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Primary' })

    expect(within(nav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')

    await user.click(within(nav).getByRole('link', { name: 'Saved Jobs' }))
    expect(getPageHeading('Saved Jobs')).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Saved Jobs' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'Dashboard' })).not.toHaveAttribute('aria-current')
  })

  it('marks only the active primary nav link as the current page', () => {
    renderAt('/')
    const currentLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page')
    expect(currentLinks).toHaveLength(1)
    expect(currentLinks[0]).toHaveTextContent('Dashboard')
  })

  it('keeps Discover Jobs active on a job details route', () => {
    renderAt('/jobs/job-42')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Discover Jobs' })).toHaveAttribute('aria-current', 'page')
  })

  it('provides a skip link to the main content', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute('href', '#main-content')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })
})
