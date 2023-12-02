import { StoryObj, Meta } from '@storybook/react'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked'
    },
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

export const Default: Story = {
  render: () => <Button label="でふぉると" />
}

export const Primary: Story = {
  args: {
    label: 'プライマリー',
    primary: true
  }
}
