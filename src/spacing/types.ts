import sizing from "../themes/shared/sizing"
import * as System from "../lighthouse"

export type SpacingPropsT = {
  width?: keyof typeof sizing
  height?: keyof typeof sizing
  backgroundColor?: string
  display?: System.BlockPropsT["display"]
  guide?: boolean
}
