import { User } from 'lucide-react'
import Image from 'next/image'
import imgLogo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url('../assets/bg-stars.svg')] bg-cover">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/* Blur Efeito */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full " />
        {/* Stripes Efeito (Lines) */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        {/* SignIn */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-100"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">
              {' '}
              Crie sua conta e salve suas memórias!
            </span>
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={imgLogo} alt="logo nlw" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-md text-base leading-relaxed text-gray-300">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-purple-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black  transition-colors hover:bg-purple-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-300">
          joãoGui feat{' '}
          <a
            className="hover:text-gray-100"
            href="https://www.rocketseat.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat 💜
          </a>
        </div>
      </div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center font-thin leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
