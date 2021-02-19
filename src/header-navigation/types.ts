import { StyleObject } from "styletron-react"

export type HeaderNavigationOverridesT = {
  Header?: StyleObject
}
export type HeaderNavigationPropsT = {
  children?: React.ReactNode
  overrides?: HeaderNavigationOverridesT
}

export type HeaderNavigationItemPropsT = {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}
