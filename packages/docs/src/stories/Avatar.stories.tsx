import type { StoryObj, Meta } from '@storybook/react'
import { Avatar } from '@ignite-ui/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/matheuscaldas1.png',
    alt: 'Matheus Lima',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
