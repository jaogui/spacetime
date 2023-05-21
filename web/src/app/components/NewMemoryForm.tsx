'use client'

import { Camera } from 'lucide-react'
import MediaPicker from './MediaPicker'
import { FormEvent } from 'react'

export default function NewMemoryForm() {
  function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(Array.from(formData.entries()))
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="midia"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar arquivo
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-green-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-3 w-3 rounded border-gray-400 bg-gray-200 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full  flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button
        type="submit"
        className="sef-left inline-block w-40 rounded-full bg-green-700 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-purple-600"
      >
        Salvar
      </button>
    </form>
  )
}
