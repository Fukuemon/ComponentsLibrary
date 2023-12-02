import { StoryObj, Meta } from '@storybook/react'
import ShadcnButtons from './index'

const meta: Meta<typeof ShadcnButtons> = {
  component: ShadcnButtons
}

export default meta

type Story = StoryObj<typeof ShadcnButtons>

export const Base: Story = {
  render: () => <ShadcnButtons />
}
