'use client'
import styles from '../counter.module.scss'
import { useCountValue } from './GoodContext'

export const GoodDisplayCount = () => {
  console.log('render カウント')

  const count = useCountValue()

  return <p className={styles.count}>カウント: {count}</p>
}
