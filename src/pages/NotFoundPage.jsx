import { ArrowLeft } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button.jsx'
import { PageHeader } from '../components/ui/PageHeader.jsx'

export default function NotFoundPage() {
  return (
    <PageHeader
      title="Page not found"
      description="The page you are looking for does not exist or may have moved."
      actions={
        <ButtonLink to="/" variant="secondary">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to dashboard
        </ButtonLink>
      }
    />
  )
}
