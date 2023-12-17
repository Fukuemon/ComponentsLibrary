'use client'
import styles from '../counter.module.scss'
import { useCountValue } from './BadContext'

export const BadDisplayCount = () => {
  console.log('render カウント')

  const count = useCountValue()

  return <p className={styles.count}>カウント: {count}</p>
}
