import { StoryObj, Meta } from '@storybook/react'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button label="でふぉると" />
}

export const Primary: Story = {
  render: () => <Button label="ぷらいまりぃ" primary />
}
