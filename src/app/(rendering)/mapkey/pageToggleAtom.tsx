import { atomWithStorage } from 'jotai/utils'

export const isPageToggleAtom = atomWithStorage<boolean>('isPageToggle', false)
