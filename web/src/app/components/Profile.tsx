import { getUser } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">
        <p className="font-sans text-sm text-gray-100">Bem-vindo, {name} </p>
        <a href="" className="block text-sm text-red-400 hover:text-red-500">
          Sair
        </a>
      </p>
    </div>
  )
}

export default Profile
