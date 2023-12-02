import { StoryObj, Meta } from '@storybook/react'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button'
    },
    primary: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Base: Story = {
  args: {
    label: 'Base'
  }
}
