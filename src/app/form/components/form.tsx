'use client'
import FlexBox from '@/app/(style)/flex/_components/FlexBox/FlexBox'
import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCreateFormData } from '../hooks/useCreateFormData'
import { FileInput } from './FileInput/FileInput'

export const PostForm = () => {
  const { form, imagePreview, handleImageChange, modelPreview, handleModelChange } = useCreateFormData()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))} className="flex flex-col gap-24">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">タイトル</FormLabel>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FlexBox flexDirection="row">
          <div>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">写真</FormLabel>
                  <FormControl>
                    <FileInput
                      fileType="image/*"
                      preview={imagePreview}
                      handleChangeFile={handleImageChange}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">3Dモデル(任意)</FormLabel>
                  <FormControl>
                    <FileInput
                      fileType=".glb"
                      preview={modelPreview}
                      handleChangeFile={handleModelChange}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FlexBox>
        <FormField
          control={form.control}
          name="contents"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">投稿内容</FormLabel>
              <FormControl>
                <Input placeholder="投稿内容..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">投稿</Button>
      </form>
    </Form>
  )
}
