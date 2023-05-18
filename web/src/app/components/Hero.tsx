import React from 'react'
import imgLogo from '../../assets/logo.svg'
import Image from 'next/image'

function Hero() {
  return (
    <div className="space-y-5">
      <Image src={imgLogo} alt="logo nlw" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-md text-base leading-relaxed text-gray-300">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-purple-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black  transition-colors hover:bg-purple-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}

export default Hero
