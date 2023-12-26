'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useFileInput } from '../components/FileInput/FileInput.hooks'

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
  const { file: imageFile, preview: imagePreview, handleChangeFile: handleImageChange } = useFileInput()
  const { file: modelFile, preview: modelPreview, handleChangeFile: handleModelChange } = useFileInput()

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
    imageFile,
    imagePreview,
    handleImageChange,
    modelFile,
    modelPreview,
    handleModelChange
  }
}
