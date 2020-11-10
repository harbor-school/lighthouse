import { StyleObject } from "styletron-react"

export type BreadcrumbsOverridesT = {
  Wrap?: StyleObject
  Item?: StyleObject
}
export type BreadcrumbsPropsT = {
  children?: React.ReactNode
  overrides?: BreadcrumbsOverridesT
}
