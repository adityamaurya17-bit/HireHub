import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded-md text-sm font-medium text-indigo-700 hover:text-indigo-900"
      >
        Back to dashboard
      </Link>
    </>
  )
}
