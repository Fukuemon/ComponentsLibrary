'use client'
import React, { FC, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Circle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { isPageToggleAtom } from '../pageToggleAtom'
type items = {
  path: string
  label: string
}

type ListContentProps = {
  items: items[]
  currentPath: string
}

export const ListContent: FC<ListContentProps> = ({ items, currentPath }) => {
  const excludePath = ['/hoge', '/fuga']
  if (excludePath.includes(currentPath)) return null
  return (
    <div className="flex w-1/2 justify-between">
      {items.map((item, index) => {
        const isSelected = item.path.includes(currentPath)
        return (
          <li
            key={index} // Good：keyをindexで指定する
            className={cn('text-3xl flex flex-col items-center justify-center text-center', {
              'font-bold text-red-500': isSelected
            })}
          >
            <Link href={item.path}>
              <span>{item.label}</span>
              <Circle className="text-3xl" />
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default function MapContent() {
  // 現在のパスを取得
  const [isSwitched, setIsSwitch] = useAtom(isPageToggleAtom)
  const [aPath, setAPath] = useState('')
  const [bPath, setBPath] = useState('')
  useEffect(() => {
    if (isSwitched) {
      setAPath('a')
      setBPath('b')
    } else {
      setAPath('b')
      setBPath('a')
    }
  }, [isSwitched])
  const currentPath = usePathname()
  const items = [
    { path: `/mapkey/${aPath}`, label: aPath },
    { path: `/mapkey/${bPath}`, label: bPath }
  ]

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">GoodMapContent</h1>
      <Button className=" w-40" onClick={() => setIsSwitch(!isSwitched)}>
        {isSwitched ? 'Switched' : 'Not Switched'}
      </Button>
      <ListContent items={items} currentPath={currentPath} />
    </div>
  )
}
