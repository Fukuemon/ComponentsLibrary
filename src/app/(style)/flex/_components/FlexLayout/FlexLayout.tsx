import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

// FlexLayout と FlexColumn のプロパティの型定義
type FlexLayoutProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  justifyContent?: string
  alignItems?: string
  gap?: string
  padding?: string // FlexLayout の padding
}

type FlexColumnProps = {
  flexSize: string
  children: ReactNode
  width?: string
  height?: string
  padding?: string // FlexColumn の padding
  margin?: string // FlexColumn の margin
}

export const FlexLayout: React.FC<FlexLayoutProps> = ({
  children,
  direction = 'row',
  justifyContent,
  alignItems,
  gap,
  padding
}) => {
  return (
    <div
      className={styles.flexLayout}
      style={{
        flexDirection: direction,
        justifyContent,
        alignItems,
        gap,
        padding
      }}
    >
      {children}
    </div>
  )
}

// Flex
export const FlexColumn: React.FC<FlexColumnProps> = ({ flexSize, children, width, height, padding, margin }) => {
  return (
    <div
      className={styles.flexColumn}
      style={{
        flex: flexSize,
        width,
        height,
        padding,
        margin
      }}
    >
      {children}
    </div>
  )
}

// 使用例
export const MyCustomLayout: React.FC = () => {
  return (
    <FlexLayout padding="20px">
      <FlexColumn flexSize="1 1 auto" margin="10px" padding="15px">
        カラム1
      </FlexColumn>
      <FlexColumn flexSize="2 1 auto" margin="10px" padding="15px">
        カラム2
      </FlexColumn>
      {/* 他のカラム... */}
    </FlexLayout>
  )
}
