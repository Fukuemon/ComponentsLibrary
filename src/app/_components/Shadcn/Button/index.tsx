import React from 'react'
import { Button } from '@/components/ui/button'

const ShadcnButtons = () => {
  return (
    <>
      <div className="flex items-start space-x-4 text-lg p-8">
        <h2 className="text-gray-700">Variant：</h2>
        <Button>Button</Button>
        <Button variant="link">link</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
      </div>
      <div className="flex justify-center space-x-4 text-lg">
        <h2 className="text-gray-700">Size：</h2>
        <Button size="default">default</Button>
        <Button size="sm">sm</Button>
        <Button size="lg">lg</Button>
      </div>
    </>
  )
}

export default ShadcnButtons
