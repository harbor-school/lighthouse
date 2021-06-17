import { StyleObject } from "styletron-react"
import { ResponsiveT } from "../block"

export type ProgressBarOverridesT = {
  Wrap?: StyleObject
  Bar?: StyleObject
}
export type ProgressBarPropsT = {
  value?: number
  infinite?: boolean
  overrides?: ProgressBarOverridesT
  color?: string
  track?: string
}
