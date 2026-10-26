import { Bookmark } from 'lucide-react'
import EmptyState from '../components/feedback/EmptyState.jsx'
import { ButtonLink } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageHeader } from '../components/ui/PageHeader.jsx'

export default function SavedJobsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Saved Jobs"
        description="Keep track of the roles you want to come back to."
      />
      <Card>
        <EmptyState
          icon={Bookmark}
          title="Saving jobs is not available yet"
          description="Jobs you save from the listings will appear here."
          action={
            <ButtonLink to="/jobs" variant="secondary">
              Go to Discover Jobs
            </ButtonLink>
          }
        />
      </Card>
    </div>
  )
}
