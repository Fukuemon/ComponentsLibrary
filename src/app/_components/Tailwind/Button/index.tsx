import { FC } from 'react'
import { clsx } from 'clsx'

interface ButtonProps {
  label: string
  primary?: boolean
}

export const Button: FC<ButtonProps> = ({ label, primary = false, ...args }) => {
  return (
    <button
      className={clsx(
        'bg-blue-300 cursor-pointer rounded-md p-4 text-sm font-medium text-white shadow hover:bg-blue-400/90',
        primary && 'bg-red-300 text-primary-foreground shadow hover:bg-primary/90'
      )}
      {...args}
    >
      {label}
    </button>
  )
}
