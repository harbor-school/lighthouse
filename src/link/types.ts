import { ElementType } from "react"
import { StyleObject, StyletronBase } from "styletron-react"
import { TARGET } from "./constants"

export type InputOverridesT = {
  Link?: StyleObject
}

export type StyledLinkPropsT = {
  href?: string
  to?: string
  target?: keyof typeof TARGET
  children?: React.ReactNode
  highlight?: boolean
  as?: ElementType | StyletronBase
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  overrides?: InputOverridesT
}
