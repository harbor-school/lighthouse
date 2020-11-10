import { StyleObject } from "styletron-react"

export type ProgressBarOverridesT = {
  Wrap?: StyleObject
  Bar?: StyleObject
}
export type ProgressBarPropsT = {
  value?: number
  infinite?: boolean
  overrides?: ProgressBarOverridesT
}
