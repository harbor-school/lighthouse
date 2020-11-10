import { StyleObject } from "styletron-react"

export type ListItemOverrides = {
  Wrap?: StyleObject
  EndEnhancer?: StyleObject
}
export type ListItemPropsT = {
  children?: React.ReactNode
  endEnhancer?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  overrides?: ListItemOverrides
}

export type ListItemLabelOverrides = {
  ListItemLabelWrap?: StyleObject
}
export type ListItemLabelPropsT = {
  children?: React.ReactNode
  overrides?: ListItemLabelOverrides
}
