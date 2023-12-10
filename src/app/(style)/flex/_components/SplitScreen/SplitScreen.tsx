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

/** n個のchildrenを受け取る **/

type DynamicSplitScreen = {
  children: React.ReactNode[]
  weights?: number[] // 各子要素のflex値を格納する配列
}

export const DynamicSplitScreen = ({ children, weights = [] }: DynamicSplitScreen) => {
  return (
    <div className={styles.container}>
      {children.map((child, index) => (
        <div key={index} className={styles.pane} style={{ flex: weights[index] || 1 }}>
          {child}
        </div>
      ))}
    </div>
  )
}
