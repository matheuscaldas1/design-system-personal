import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox } from '@verossim/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            alignItems: 'center',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {}
