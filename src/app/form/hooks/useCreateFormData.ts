'use client'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const PostSchema = z.object({
  title: z.string(),
  image: z
    .custom<FileList>()
    .transform((file) => file[0])
    .nullable(),
  model: z
    .custom<FileList>()
    .transform((file) => file[0])
    .nullable(),
  contents: z.string(),
  tags: z.array(z.string())
})

type PostType = z.infer<typeof PostSchema>

export const useCreateFormData = () => {
  const [image, setImage] = useState<File | null>(null)
  const [model, setModel] = useState<File | null>(null)
  const form = useForm<PostType>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: '',
      image: null,
      model: null,
      contents: '',
      tags: []
    }
  })
  return {
    form,
    image,
    setImage,
    model,
    setModel
  }
}
