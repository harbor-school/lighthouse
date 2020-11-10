import { StyleObject } from "styletron-react"

export type SelectOverridesT = {
  Wrap?: StyleObject
  OptionList?: StyleObject
  Option?: StyleObject
  OptionLabel?: StyleObject
}
export type SelectOption = {
  label: string | React.ReactNode
  key?: string
  disabled?: boolean
  endEnhancer?: React.ReactNode
}
export type SelectPropsT = {
  options?: Array<SelectOption>
  placeholder?: string
  active?: number
  isOpen?: boolean
  animate?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onChange?: (newValue: number) => void
  onClickOutside?: (event?: React.MouseEvent<HTMLElement>) => void
  overrides?: SelectOverridesT
}
