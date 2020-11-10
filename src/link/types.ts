import { ElementType } from "react"
import { StyleObject } from "styletron-react"
import { TARGET } from "./constants"

export type InputOverridesT = {
  Link?: StyleObject
}

export type StyledLinkPropsT = {
  href?: string
  target?: keyof typeof TARGET
  children?: React.ReactNode
  highlight?: boolean
  as?: ElementType
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  overrides?: InputOverridesT
}
