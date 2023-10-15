import { FC } from 'react'
import { clsx } from 'clsx'
import styles from './style.module.scss'

interface ButtonProps {
  label: string
  primary?: boolean
}

export const Button: FC<ButtonProps> = ({ label, primary, ...args }) => {
  return (
    <button className={clsx(styles.button, { [styles.primary]: primary })} {...args}>
      {label}
    </button>
  )
}
