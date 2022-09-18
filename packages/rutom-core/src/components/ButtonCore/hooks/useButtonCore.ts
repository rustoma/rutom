import { useMemo } from 'react'

interface useButtonCoreProps {
  focusableWhenDisabled: boolean
  disabled?: boolean
  tabIndex?: number
}

export const useButtonCore = ({
  focusableWhenDisabled,
  disabled = false,
  tabIndex = 0
}: useButtonCoreProps) => {
  const tabIndexMemoized = useMemo(() => {
    if (disabled) return focusableWhenDisabled ? tabIndex : -1

    return tabIndex
  }, [disabled, focusableWhenDisabled, tabIndex])

  return {
    'aria-disabled': disabled,
    tabIndex: tabIndexMemoized
  }
}
