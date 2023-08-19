import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep } from '@ignite-ui/react'

const meta: Meta<typeof MultiStep> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof MultiStep>

export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
