/* 
  Middleware p/ autenticação, limita usuário acessar algumas rotas.
  Nesse caso ele verifica se o usuário está logado na aplicação para acessar a page New
  e cadastrar uma lembrança.
*/

import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      // Setando Cookie no navegador p/ guardar a página que usuário queria tentar acessar
      headers: {
        'Set-cookie': `redirectTo=${request.url}; Path=/; HttpOnly max-age=20`,
      },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
