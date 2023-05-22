import { cookies } from 'next/headers'
import EmptyMemories from './components/EmptyMemories'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
dayjs.locale(ptBr)

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  interface MemoryInterfaceWeb {
    id: string
    imgUrl: string
    excerpt: string
    createdAt: string
  }

  const memories: MemoryInterfaceWeb[] = response.data
  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY ')}
            </time>
          </div>
        )
      })}
    </div>
  )
}
