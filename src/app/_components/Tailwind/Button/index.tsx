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
        'bg-blue-300 cursor-pointer rounded-md p-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        primary && 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
      )}
      {...args}
    >
      {label}
    </button>
  )
}
