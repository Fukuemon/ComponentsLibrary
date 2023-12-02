import { SplitScreen } from './_conponets/Flex/SplitScreen/SplitScreen'

const LeftComponent = ({ name }: { name: string }) => {
  return <h1 className=" bg-blue-100 text-center">{name}</h1>
}

const RightComponent = ({ message }: { message: string }) => {
  return <h1 className="bg-red-100 text-center">{message}</h1>
}
export default function Flex() {
  return (
    <SplitScreen leftWeight={2} rightWeight={3}>
      <LeftComponent name="John" />
      <RightComponent message="Hello" />
    </SplitScreen>
  )
}
