import { StyleObject } from "styletron-react"

export type InputPropsT = {
  label?: string
  caption?: string
  placeholder?: string
  defaultValue?: string
  name?: string
  required?: boolean
  pattern?: string
  type?: string
  autoFocus?: boolean
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
  overrides?: {
    Wrap?: StyleObject
    LabelText?: StyleObject
    Caption?: StyleObject
    FocusBar?: StyleObject
    BaseInput?: StyleObject
  }
}
