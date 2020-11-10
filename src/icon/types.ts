import { ALIGN } from "./constants"

export interface IconPropsT {
  width?: string | number
  height?: string | number
  viewBox?: string
  color?: string
  align?: keyof typeof ALIGN
  children?: React.ReactNode
}

export interface MenuIconPropsT extends IconPropsT {
  active?: boolean
}
