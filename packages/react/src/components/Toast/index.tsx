import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  ToastClose,
  ToastRoot,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  ButtonDisabled: boolean
  ButtonName: string
  ButtonSize: 'sm' | 'md'
  ButtonType: 'primary' | 'secondary' | 'tertiary'
  AlertTitle: string
  AlertDescription: string
  DurationMs: number
  Theme: 'dark' | 'light'
}

export function Toast({
  ButtonDisabled,
  ButtonName,
  ButtonSize,
  ButtonType,
  AlertTitle,
  AlertDescription,
  DurationMs,
  Theme,
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ToastProvider duration={DurationMs} swipeDirection="right">
      <Button
        disabled={ButtonDisabled}
        onClick={() => {
          setIsOpen(true)
        }}
        variant={ButtonType}
        size={ButtonSize}
      >
        {ButtonName}
      </Button>

      <ToastRoot themes={Theme} open={isOpen} onOpenChange={setIsOpen}>
        <ToastTitle asChild>
          <Heading>{AlertTitle || 'Title'}</Heading>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm">{AlertDescription || 'Description'}</Text>
        </ToastDescription>

        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'