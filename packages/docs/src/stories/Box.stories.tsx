import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text } from '@ignite-ui/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {}
