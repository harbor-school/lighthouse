import * as System from "../lighthouse"
import sizing from "../themes/shared/sizing"

export interface FlexBoxPropsT extends System.BlockPropsT {
  columnGap?: keyof typeof sizing | string
  rowGap?: keyof typeof sizing | string
  columnRatio?: number[]
  children: React.ReactElement | React.ReactNode
}

export interface FlexItemPropsT extends System.BlockPropsT {
  $id?: number
  $columnGap?: string
  $rowGap?: string
  $widthRatio?: number[]
  noShrink?: boolean
  children: React.ReactNode
}
