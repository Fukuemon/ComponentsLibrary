import styles from './styles.module.scss'

type SplitScreenProps = {
  children: React.ReactNode[]
  leftWeight?: number
  rightWeight?: number
}

export const SplitScreen = ({ children, leftWeight, rightWeight }: SplitScreenProps) => {
  const [left, right] = children

  return (
    <div className={styles.container}>
      <div className={styles.pane} style={{ flex: leftWeight }}>
        {left}
      </div>
      <div className={styles.pane} style={{ flex: rightWeight }}>
        {right}
      </div>
    </div>
  )
}
