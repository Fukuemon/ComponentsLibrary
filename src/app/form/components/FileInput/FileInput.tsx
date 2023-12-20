'use client'

import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useFileInput } from './FileInput.hooks'

type FileInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileType: string
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ fileType, ...props }, ref) => {
  const { preview, handleChangeFile } = useFileInput()

  return (
    <label>
      <Input type="file" accept={fileType} className={cn('sr-only')} ref={ref} {...props} onChange={handleChangeFile} />
      <div className="w-[300px] h-[300px]">
        <Image src={preview} alt="preview" objectFit="contain" width={300} height={300} />
      </div>
      /
    </label>
  )
})
FileInput.displayName = 'ImageInput'
