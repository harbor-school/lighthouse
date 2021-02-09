import { StyleObject } from "styletron-react"

export type CardOverrides = {
  Wrap?: StyleObject
}

export type CardBodyOverrides = {
  BodyWrap?: StyleObject
}

export type CardActionOverrides = {
  ActionWrap?: StyleObject
}

export type CardPropsT = {
  title?: string | React.ReactNode
  label?: string | React.ReactNode
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  overrides?: CardOverrides
}

export type CardBodyPropsT = {
  children?: React.ReactNode
  overrides?: CardBodyOverrides
}

export type CardActionPropsT = {
  children?: React.ReactNode
  overrides?: CardActionOverrides
}
