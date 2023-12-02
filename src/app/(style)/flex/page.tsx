import { SplitScreen } from './_conponets/Flex/SplitScreen/SplitScreen'

const LeftComponent = () => {
  return <h1 className=" bg-blue-100 text-center">Left</h1>
}

const RightComponent = () => {
  return <h1 className="bg-red-100 text-center">Right</h1>
}
export default function Flex() {
  return <SplitScreen left={LeftComponent} right={RightComponent} leftWeight={2} rightWeight={3} />
}
