import sizing from "../themes/shared/sizing"

export type SpacingPropsT = {
  width?: keyof typeof sizing
  height?: keyof typeof sizing
  backgroundColor?: string
}
