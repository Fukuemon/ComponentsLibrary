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
    },
    className: {
      control: 'text'
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

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive'
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link'
  }
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg'
  }
}

export const Icon: Story = {
  args: {
    children: 'Icon',
    size: 'icon'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}

export const AsChild: Story = {
  args: {
    children: 'AsChild',
    asChild: true
  }
}

export const CustomClass: Story = {
  args: {
    children: 'CustomClass',
    className: 'text-red-500'
  }
}
