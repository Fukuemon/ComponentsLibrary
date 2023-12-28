'use client'
import { createContext, useState, useContext, ReactNode, Dispatch } from 'react'

const selectionContext = createContext<string>('')
const setSelectionContext = createContext<Dispatch<React.SetStateAction<string>>>(() => undefined)

const useSelectionValue = () => useContext(selectionContext)
const useSetSelectionValue = () => useContext(setSelectionContext)

const SelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selection, setSelection] = useState<string>('')

  return (
    <selectionContext.Provider value={selection}>
      <setSelectionContext.Provider value={setSelection}>{children}</setSelectionContext.Provider>
    </selectionContext.Provider>
  )
}

export { SelectionProvider, useSelectionValue, useSetSelectionValue }
