import React from 'react'

import { useButtonCore } from '@/components/ButtonCore/hooks/useButtonCore'

interface ButtonCoreProps extends React.ComponentPropsWithoutRef<'button'> {
  focusableWhenDisabled?: boolean
}

export const ButtonCore = React.forwardRef(
  (
    {
      children,
      focusableWhenDisabled = false,
      disabled,
      tabIndex,
      ...rest
    }: ButtonCoreProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const additionalProps = useButtonCore({
      focusableWhenDisabled,
      disabled,
      tabIndex
    })

    return (
      <button ref={forwardedRef} {...rest} {...additionalProps}>
        {children}
      </button>
    )
  }
)

ButtonCore.displayName = 'ButtonCore'
