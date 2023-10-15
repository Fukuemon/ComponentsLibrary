import { Button } from '@/components/ui/button'
import { Sample } from './Sample'
import ShadcnButtons from './_components/Shadcn/Button'

const user = {
  name: 'John Doe'
}

export default function Home() {
  return (
    <div>
      <Sample user={user} />
      <ShadcnButtons />
    </div>
  )
}
