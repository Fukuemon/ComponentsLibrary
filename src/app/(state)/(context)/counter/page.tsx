import FlexBox from '@/app/(style)/flex/_components/FlexBox/FlexBox'
import { OtherComponent } from './OtherComponet'
import { BadCountProvider } from './_bad/BadContext'
import { BadCountUpButton } from './_bad/Button'
import { BadDisplayCount } from './_bad/DisplayCount'
import { GoodCountUpButton } from './_good/Button'
import { GoodDisplayCount } from './_good/DisplayCount'
import { GoodCountProvider } from './_good/GoodContext'
import styles from './counter.module.scss'

const Counter = () => {
  return (
    <FlexBox flexDirection="column" className="w-screen h-screen" gap={200}>
      <FlexBox flexDirection="column" className={styles.counter} justifyContent="center" alignContent="center">
        <BadDisplayCount />
        <BadCountUpButton />
        <OtherComponent />
      </FlexBox>
      <FlexBox flexDirection="column" className={styles.counter} justifyContent="center" alignContent="center">
        <GoodDisplayCount />
        <GoodCountUpButton />
        <OtherComponent />
      </FlexBox>
    </FlexBox>
  )
}

export default function CounterPage() {
  return (
    <BadCountProvider>
      <GoodCountProvider>
        <Counter />
      </GoodCountProvider>
    </BadCountProvider>
  )
}
