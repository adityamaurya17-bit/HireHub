import { Search } from 'lucide-react'
import EmptyState from '../components/feedback/EmptyState.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageHeader } from '../components/ui/PageHeader.jsx'

export default function DiscoverJobsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Discover Jobs" description="Search, filter, and sort job listings." />
      <Card>
        <EmptyState
          icon={Search}
          title="Job listings are not available yet"
          description="Search, filters, and listings will appear here once job data is connected."
        />
      </Card>
    </div>
  )
}
