'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import loadImage, { LoadImageOptions } from 'blueimp-load-image'
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

  const onSubmit = async (data: PostType) => {
    // console.log(data)
    try {
      const formData = new FormData()
      formData.append('title', data.title)
      if (data.image) {
        const compressedImage = await compressImage(data.image)
        formData.append('image', compressedImage)
        // formData.append('image', data.image)
      }
      if (data.model) {
        formData.append('model', data.model)
      }
      formData.append('contents', data.contents)
      formData.append('tags', JSON.stringify(data.tags))

      //memo: // スプレッド構文でformDataを展開すると、formData.entries()と同じ結果が得られる
      console.log([...formData])
    } catch (error) {
      console.log(error)
    }
  }

  // loadImage関数の型定義
  type LoadImage = (
    file: File | Blob | string,
    callback: (canvas: HTMLCanvasElement) => void,
    options?: LoadImageOptions
  ) => void

  // 画像圧縮処理
  const compressImage = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      ;(loadImage as LoadImage)(
        file,
        (canvas: HTMLCanvasElement) => {
          if (!canvas.toBlob) {
            reject(new Error('お使いのブラウザは Canvas.toBlob メソッドをサポートしていません'))
            return
          }

          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob)
              } else {
                reject(new Error('Image compression resulted in null Blob'))
              }
            },
            file.type,
            0.7
          )
        },
        {
          maxWidth: 1200,
          canvas: true
        }
      )
    })
  }

  return {
    form,
    onSubmit,
    imageFile,
    imagePreview,
    handleImageChange,
    modelFile,
    modelPreview,
    handleModelChange
  }
}
