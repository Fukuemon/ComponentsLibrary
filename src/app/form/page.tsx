import { PostForm } from './components/form'

export default function FormPage() {
  return (
    <div className="flex h-screen flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">投稿フォーム</h1>
      <div className="flex  items-center  gap-11 justify-center">
        <PostForm />
      </div>
    </div>
  )
}
