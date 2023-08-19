import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput } from '@ignite-ui/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
  },
}
