'use client'
import { useCallback } from 'react'
import { Button } from '@/app/_components/SCSS/Button'
import { useCountSetValue } from './BadContext'

export const BadCountUpButton = () => {
  console.log('render ボタン')

  const setCount = useCountSetValue()

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [setCount])

  return (
    <div>
      <Button onClick={increment} label="+1" />
    </div>
  )
}
