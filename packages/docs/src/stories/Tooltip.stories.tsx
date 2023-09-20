import { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@luizbonatto-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    Content: '21 de Outubro - Indisponível',
    ContentSide: 'top',
    ContentColor: 'gray100',
    ContentBackground: 'gray900',
    backgroundButton: 'gray600',
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
    ContentSide: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    backgroundButton: {
      options: [
        'white',
        'black',
        'gray100',
        'gray200',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
        'ignite300',
        'ignite500',
        'ignite700',
        'ignite900',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    ContentBackground: {
      options: [
        'white',
        'black',
        'gray100',
        'gray200',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
        'ignite300',
        'ignite500',
        'ignite700',
        'ignite900',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    ContentColor: {
      options: [
        'white',
        'black',
        'gray100',
        'gray200',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
        'ignite300',
        'ignite500',
        'ignite700',
        'ignite900',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '$2',
            height: '$40',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
