import React from 'react'

export const useFileInput = () => {
  const [file, setFile] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState('/image/no_image.png')
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(window.URL.createObjectURL(file))
    setFile(file)
  }
  return {
    file,
    preview,
    handleChangeFile
  }
}
