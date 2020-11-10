import { StyleObject } from "styletron-react"
import { ElementType } from "react"
import { KIND, SHAPE, TYPE } from "./constants"

export type ButtonOverridesT = {
  BaseButton?: StyleObject
  StartEnhancer?: StyleObject
  ButtonText?: StyleObject
}

export type ButtonPropsT = {
  kind?: keyof typeof KIND
  shape?: keyof typeof SHAPE
  type?: keyof typeof TYPE
  children?: React.ReactNode
  startEnhancer?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  animate?: boolean
  as?: ElementType
  href?: string
  target?: string
  rel?: string
  forwardedRef?: any
  overrides?: ButtonOverridesT
}
