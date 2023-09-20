import { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@luizbonatto-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    Theme: 'dark',
    DurationMs: 1500,
    AlertTitle: 'Agendamento realizado',
    AlertDescription: 'Quarta-feira, 23 de Outubro às 16h',
    ButtonName: 'Agendar',
    ButtonSize: 'md',
    ButtonType: 'secondary',
    ButtonDisabled: false,
  },
  argTypes: {
    Theme: {
      options: ['dark', 'light'],
      control: {
        type: 'inline-radio',
      },
    },
    ButtonSize: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    ButtonType: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    ButtonDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Dark: StoryObj<ToastProps> = {}

export const Light: StoryObj<ToastProps> = {
  args: {
    Theme: 'light',
  },
}
