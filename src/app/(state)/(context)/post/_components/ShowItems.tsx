'use client'
import React from 'react'
import { useSelectionValue } from '../context/selectItemContext'

export const ShowItem: React.FC = () => {
  const selection = useSelectionValue()

  return <div>選択された値: {selection}</div>
}
