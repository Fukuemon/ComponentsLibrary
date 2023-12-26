'use client'
import React, { forwardRef } from 'react'
import Image from 'next/image'
import ModelViewer from '@/app/modelview/components/ModelViewer/ModelViewer'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type FileInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileType: string
  preview?: string
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ fileType, preview, handleChangeFile, ...props }, ref) => {
    return (
      <label>
        <Input
          type="file"
          accept={fileType}
          className={cn('sr-only')}
          ref={ref}
          {...props}
          onChange={handleChangeFile}
        />
        <div className="w-[300px] h-[250px] relative">
          {preview ? (
            fileType === 'image/*' ? (
              <Image
                src={preview}
                alt="preview"
                className="object-container max-h-96 max-w-[300px]"
                // width={300}
                // height={300}
                fill
              />
            ) : (
              <ModelViewer src={preview} />
            )
          ) : (
            <Image
              src="/image/no_image.png"
              alt="preview"
              width={300}
              height={300}
              className="object-container max-h-[300px] max-w-[300px]"
            />
          )}
        </div>
      </label>
    )
  }
)
FileInput.displayName = 'ImageInput'
