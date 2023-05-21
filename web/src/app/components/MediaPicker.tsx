'use client'

import { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState('')

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
  }
  return (
    <input
      onChange={onFileSelected}
      type="file"
      id="midia"
      className="invisible h-0 w-0"
    />
  )
}
