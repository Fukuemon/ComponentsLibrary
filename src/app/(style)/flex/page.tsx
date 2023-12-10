import FlexBox from './_components/FlexBox/FlexBox'
import { FlexColumn, FlexLayout } from './_components/FlexLayout/FlexLayout'
import { DynamicSplitScreen, SplitScreen } from './_components/SplitScreen/SplitScreen'

const LeftComponent = ({ name }: { name: string }) => {
  return <h1 className="flex bg-blue-100 text-center h-36 items-center justify-center">{name}</h1>
}

const RightComponent = ({ message }: { message: string }) => {
  return <h1 className="bg-red-100 text-center">{message}</h1>
}
export default function Flex() {
  return (
    <div>
      <SplitScreen leftWeight={2} rightWeight={3}>
        <LeftComponent name="John" />
        <RightComponent message="Hello" />
      </SplitScreen>
      <div>
        <DynamicSplitScreen weights={[1, 2, 3]}>
          <LeftComponent name="John" />
          <RightComponent message="Hello" />
          <LeftComponent name="John" />
        </DynamicSplitScreen>
      </div>
      <div>
        <FlexLayout direction="column" gap="1px" padding="1px">
          <FlexColumn flexSize="1 1 100px" margin="10px" padding="15px">
            <LeftComponent name="John" />
          </FlexColumn>
          <FlexColumn flexSize="1 1 200px" margin="10px" padding="15px">
            <RightComponent message="Hello" />
          </FlexColumn>
        </FlexLayout>
      </div>
      <div>
        <FlexBox flexDirection="column" gap="2px" padding="2px">
          <LeftComponent name="John" />
          <RightComponent message="Hello" />
        </FlexBox>
      </div>
    </div>
  )
}
