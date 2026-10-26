import { useParams } from 'react-router'

export default function JobDetailsPage() {
  const { jobId } = useParams()

  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight">Job Details</h1>
      <p className="mt-2 text-slate-600">
        Details for listing <span className="font-medium text-slate-900">{jobId}</span> will
        appear here.
      </p>
    </>
  )
}
