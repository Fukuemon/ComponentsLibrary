import { FC } from 'react'
import { clsx } from 'clsx'
import styles from './style.module.scss'

interface ButtonProps {
  label: string
  primary?: boolean
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, primary, onClick, ...args }) => {
  return (
    <button className={clsx(styles.button, { [styles.primary]: primary })} onClick={onClick} {...args}>
      {label}
    </button>
  )
}
