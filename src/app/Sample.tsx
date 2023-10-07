import { FC } from 'react'

type SampleProps = {
  user: {
    name: string
  }
}

export const Sample: FC<SampleProps> = ({ user }) => {
  return (
    <div className="flex justify-center p-8 text-lg">
      <div>{user.name}</div>
    </div>
  )
}

type User = {
  name: string
}

export const Sample2 = () => {
  const user: User = {
    name: 'John',
    age: 25
  }
  return <div>{user.age}</div>
}

export function getUser(): User {
  const user: any = {
    name: 'John',
    age: 25
  }
  return user // user型はUser型ではなくany型
}

export const Sample3 = () => {
  const user = getUser()
  return <div>{user.age}</div>
}
