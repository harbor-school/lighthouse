import { StyleObject } from "styletron-react"

export type InputPropsT = {
  label?: string
  caption?: string
  placeholder?: string
  defaultValue?: string
  name?: string
  required?: boolean
  pattern?: string
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  overrides?: {
    Wrap?: StyleObject
    LabelText?: StyleObject
    Caption?: StyleObject
    FocusBar?: StyleObject
    BaseInput?: StyleObject
  }
}
