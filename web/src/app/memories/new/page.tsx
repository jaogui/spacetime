import NewMemoryForm from '@/app/components/NewMemoryForm'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-200"
      >
        {' '}
        <ChevronLeftIcon className="h-4 w-4" /> voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
