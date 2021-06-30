import { PLACEMENT } from "./constants"
import { StyleObject } from "styletron-react"

export type ToastOverridesT = {
  Wrap?: StyleObject
}
export type ToastPropsT = {
  overrides?: ToastOverridesT
  placement?: keyof typeof PLACEMENT
}
