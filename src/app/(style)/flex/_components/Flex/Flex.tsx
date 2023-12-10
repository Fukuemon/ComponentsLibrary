import clsx from 'clsx'
import styles from './styles.module.scss'

type FlexProps = {
  direction?: 'row' | 'column'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  children: React.ReactNode
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'center',
  children,
  ...props
}) => {
  let alignItemsClasses
  switch (alignItems) {
    case 'flex-start':
      alignItemsClasses = styles.alignItemsFlexStart
      break
    case 'flex-end':
      alignItemsClasses = styles.alignItemsFlexEnd
      break
    case 'center':
      alignItemsClasses = styles.alignItemsCenter
      break
    case 'baseline':
      alignItemsClasses = styles.alignItemsBaseline
      break
    case 'stretch':
      alignItemsClasses = styles.alignItemsStretch
      break
    default:
      alignItemsClasses = styles.alignItemsCenter
  }
  let justifyContentClasses
  switch (justifyContent) {
    case 'flex-start':
      justifyContentClasses = styles.justifyContentFlexStart
      break
    case 'flex-end':
      justifyContentClasses = styles.justifyContentFlexEnd
      break
    case 'center':
      justifyContentClasses = styles.justifyContentCenter
      break
    case 'space-between':
      justifyContentClasses = styles.justifyContentSpaceBetween
      break
    case 'space-around':
      justifyContentClasses = styles.justifyContentSpaceAround
      break
    case 'space-evenly':
      justifyContentClasses = styles.justifyContentSpaceEvenly
      break
    default:
      justifyContentClasses = styles.justifyContentCenter
  }
  let flexClasses
  switch (direction) {
    case 'row':
      flexClasses = clsx(styles.flexRow, alignItemsClasses, justifyContentClasses)
      break
    case 'column':
      flexClasses = clsx(styles.flexColumn, alignItemsClasses, justifyContentClasses)
      break
    default:
      flexClasses = clsx(styles.flexRow, alignItemsClasses, justifyContentClasses)
  }
  return (
    <div className={clsx(flexClasses)} {...props}>
      {children}
    </div>
  )
}
