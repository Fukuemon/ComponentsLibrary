'use client'
import { SetStateAction, Dispatch, useState, useContext, createContext } from 'react'
import {} from 'vm'

type CountState = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

// bad：値本体と更新関数を一緒に持つ
const countContext = createContext<CountState>({
  count: 0,
  setCount: () => undefined
})

const BadCountProvider = ({ children }: { children: React.ReactElement }) => {
  const [count, setCount] = useState<number>(0)

  return <countContext.Provider value={{ count, setCount }}>{children}</countContext.Provider>
}

const useCountValue = () => useContext(countContext).count
const useCountSetValue = () => useContext(countContext).setCount

export { BadCountProvider, useCountValue, useCountSetValue }
