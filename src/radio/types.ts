import { StyleObject } from "styletron-react"

export type RadioOverridesT = {
  Wrap?: StyleObject
}
export type RadioPropsT = {
  label?: string
  checked?: boolean
  value?: string
  name?: string
  required?: boolean
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  overrides?: RadioOverridesT
}
