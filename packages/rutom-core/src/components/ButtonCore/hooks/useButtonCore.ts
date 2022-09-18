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
  return {
    'aria-disabled': disabled,
    tabIndex: focusableWhenDisabled ? tabIndex : -1
  }
}
