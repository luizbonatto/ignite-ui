import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  Content: string
  ContentSide?: 'top' | 'bottom' | 'left' | 'right'
  ContentColor?:
    | 'white'
    | 'black'
    | 'gray100'
    | 'gray200'
    | 'gray400'
    | 'gray500'
    | 'gray600'
    | 'gray700'
    | 'gray800'
    | 'gray900'
    | 'ignite300'
    | 'ignite500'
    | 'ignite700'
    | 'ignite900'
  ContentBackground?:
    | 'white'
    | 'black'
    | 'gray100'
    | 'gray200'
    | 'gray400'
    | 'gray500'
    | 'gray600'
    | 'gray700'
    | 'gray800'
    | 'gray900'
    | 'ignite300'
    | 'ignite500'
    | 'ignite700'
    | 'ignite900'
}

export function Tooltip({
  children,
  Content,
  backgroundButton,
  ContentSide,
  ContentColor,
  ContentBackground,
}: TooltipProps) {
  const hasChild = !!children && true

  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild={hasChild} backgroundButton={backgroundButton}>
          {children || 23}
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            contentColor={ContentColor}
            contentBackground={ContentBackground}
            sideOffset={5}
            side={ContentSide}
          >
            {Content}
            <TooltipArrow arrowColor={ContentBackground} />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'