import { TOAST_KIND } from "./constants"
import { StyleObject } from "styletron-react"

export type ToastOverridesT = {
  Wrap?: StyleObject
}
export type ToastPropsT = {
  overrides?: ToastOverridesT
  kind?: keyof typeof TOAST_KIND
  message?: string
  buttonText?: string
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
