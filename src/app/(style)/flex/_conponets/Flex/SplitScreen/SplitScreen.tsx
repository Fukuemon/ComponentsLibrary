import styles from './styles.module.scss'

type SplitScreenProps = {
  left: React.FC
  right: React.FC
  leftWeight?: number
  rightWeight?: number
}

export const SplitScreen = ({ left: Left, right: Right, leftWeight, rightWeight }: SplitScreenProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.pane} style={{ flex: leftWeight }}>
        <Left />
      </div>
      <div className={styles.pane} style={{ flex: rightWeight }}>
        <Right />
      </div>
    </div>
  )
}
