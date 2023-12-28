'use client'
import { SetStateAction, Dispatch, useState, useContext, createContext } from 'react'

// コンテキストは 値・値を入れる関数 で分けて作る
const countContext = createContext<number>(0)
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)

const GoodCountProvider = ({ children }: { children: React.ReactElement }) => {
  const [count, setCount] = useState<number>(0)

  // Provider は props で子コンポーネントを受ける
  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>{children}</setCountContext.Provider>
    </countContext.Provider>
  )
}

const useCountValue = () => useContext(countContext)
const useCountSetValue = () => useContext(setCountContext)

export { GoodCountProvider, useCountValue, useCountSetValue }
