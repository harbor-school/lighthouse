import { StyleObject } from "styletron-react"
import { ElementType } from "react"
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_TYPE, BUTTON_OVERRIDE_TYPE } from "./constants"

type ButtonOverridesKeyT = keyof typeof BUTTON_OVERRIDE_TYPE

export type ButtonOverridesT = {
  [overrideKey in ButtonOverridesKeyT]?: StyleObject
}

export type ButtonPropsT = {
  kind?: keyof typeof BUTTON_KIND
  shape?: keyof typeof BUTTON_SHAPE
  type?: keyof typeof BUTTON_TYPE
  children?: React.ReactNode
  startEnhancer?: React.ReactNode
  endEnhancer?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  animate?: boolean
  as?: ElementType
  href?: string
  target?: string
  rel?: string
  forwardedRef?: any
  overrides?: ButtonOverridesT
}
