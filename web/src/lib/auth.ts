import decode from 'jwt-decode'
import { cookies } from 'next/headers'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser() {
  const token = cookies().get('token')?.value
  // console.log(token)

  if (!token) {
    throw new Error('Não autenticado')
  }
  const user: User = decode(token)

  return user
}
