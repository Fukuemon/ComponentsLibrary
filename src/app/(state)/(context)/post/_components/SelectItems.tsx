'use client'
import { Button } from '@/components/ui/button'
import { useSetSelectionValue } from '../context/selectItemContext'

export function SelectItems() {
  const setSelection = useSetSelectionValue()

  return (
    <div className="flex  space-x-8 border text-lg">
      <Button onClick={() => setSelection('オプション1')}>オプション1</Button>
      <Button onClick={() => setSelection('オプション2')}>オプション2</Button>
    </div>
  )
}
