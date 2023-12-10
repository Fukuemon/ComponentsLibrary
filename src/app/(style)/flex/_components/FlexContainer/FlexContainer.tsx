import styles from './styles.module.scss'

type ContainerProps = {
  children: React.ReactNode[]
  weights?: number[] // 各子要素のflex値
  width?: string // コンテナの幅
  height?: string // コンテナの高さ
  flexDirection?: 'row' | 'column' // フレックス方向
}

export const FlexContainer = ({
  children,
  weights = [],
  width = '100%',
  height = 'auto',
  flexDirection = 'row'
}: ContainerProps) => {
  const containerStyle = {
    width,
    height,
    display: 'flex',
    flexDirection
  }

  return (
    <div className={styles.container} style={containerStyle}>
      {children.map((child, index) => (
        <div key={index} className={styles.pane} style={{ flex: weights[index] || 1 }}>
          {child}
        </div>
      ))}
    </div>
  )
}
