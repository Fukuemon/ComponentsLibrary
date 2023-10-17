import { StoryObj, Meta } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon']
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Base: Story = {
  args: {
    children: 'Base'
  }
}
