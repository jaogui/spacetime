import React from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Jamjuree,
  Bai_Jamjuree,
} from 'next/font/google'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import Copyright from './components/Copyright'
import Hero from './components/Hero'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const jamjuree = Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-jamjuree',
})

export const metadata = {
  title: 'NLW | Spacetime',
  description: 'Aplicação desenvolvida em conjunto com Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jamjuree.variable} bg-gray-900 font-sans text-gray-50`}
      >
        <main className="grid min-h-screen grid-cols-2 bg-[url('../assets/bg-stars.svg')] bg-cover">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28">
            {/* Blur Efeito */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full " />
            {/* Stripes Efeito (Lines) */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* Right Section */}
          <div className="flex flex-col p-16">{children}</div>
        </main>
      </body>
    </html>
  )
}
