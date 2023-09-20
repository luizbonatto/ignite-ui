import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  padding: '$4 $7',
  minWidth: '4.179rem',
  minHeight: '3.625rem',

  border: 0,
  borderRadius: '$sm',
  color: '$white',

  variants: {
    backgroundButton: {
      white: { backgroundColor: '$white' },
      black: { backgroundColor: '$black' },
      gray100: { backgroundColor: '$gray100' },
      gray200: { backgroundColor: '$gray200' },
      gray400: { backgroundColor: '$gray400' },
      gray500: { backgroundColor: '$gray500' },
      gray600: { backgroundColor: '$gray600' },
      gray700: { backgroundColor: '$gray700' },
      gray800: { backgroundColor: '$gray800' },
      gray900: { backgroundColor: '$gray900' },
      ignite300: { backgroundColor: '$ignite300' },
      ignite500: { backgroundColor: '$ignite500' },
      ignite700: { backgroundColor: '$ignite700' },
      ignite900: { backgroundColor: '$ignite900' },
    },
  },

  defaultVariants: {
    backgroundButton: 'gray600',
  },
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',
  borderRadius: '$sm',

  color: '$ignite300',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$xs',
  lineHeight: '$short',
  textAlign: 'center',

  variants: {
    contentBackground: {
      white: { backgroundColor: '$white' },
      black: { backgroundColor: '$black' },
      gray100: { backgroundColor: '$gray100' },
      gray200: { backgroundColor: '$gray200' },
      gray400: { backgroundColor: '$gray400' },
      gray500: { backgroundColor: '$gray500' },
      gray600: { backgroundColor: '$gray600' },
      gray700: { backgroundColor: '$gray700' },
      gray800: { backgroundColor: '$gray800' },
      gray900: { backgroundColor: '$gray900' },
      ignite300: { backgroundColor: '$ignite300' },
      ignite500: { backgroundColor: '$ignite500' },
      ignite700: { backgroundColor: '$ignite700' },
      ignite900: { backgroundColor: '$ignite900' },
    },
    contentColor: {
      white: { color: '$white' },
      black: { color: '$black' },
      gray100: { color: '$gray100' },
      gray200: { color: '$gray200' },
      gray400: { color: '$gray400' },
      gray500: { color: '$gray500' },
      gray600: { color: '$gray600' },
      gray700: { color: '$gray700' },
      gray800: { color: '$gray800' },
      gray900: { color: '$gray900' },
      ignite300: { color: '$ignite300' },
      ignite500: { color: '$ignite500' },
      ignite700: { color: '$ignite700' },
      ignite900: { color: '$ignite900' },
    },
  },

  defaultVariants: {
    contentBackground: 'gray900',
    contentColor: 'gray100',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  variants: {
    arrowColor: {
      white: { fill: '$white' },
      black: { fill: '$black' },
      gray100: { fill: '$gray100' },
      gray200: { fill: '$gray200' },
      gray400: { fill: '$gray400' },
      gray500: { fill: '$gray500' },
      gray600: { fill: '$gray600' },
      gray700: { fill: '$gray700' },
      gray800: { fill: '$gray800' },
      gray900: { fill: '$gray900' },
      ignite300: { fill: '$ignite300' },
      ignite500: { fill: '$ignite500' },
      ignite700: { fill: '$ignite700' },
      ignite900: { fill: '$ignite900' },
    },
  },

  defaultVariants: {
    arrowColor: 'gray600',
  },
})