import { ComponentProps, ElementType } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Text } from '@ignite-ui/react'

interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum nobis repellendus beatae dolorem, voluptatem dignissimos facere deserunt tempore cupiditate a molestias expedita minus praesentium, fugiat incidunt quo voluptatum quod.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export default meta
type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
