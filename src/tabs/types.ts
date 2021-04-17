import { StyleObject } from "styletron-react"
import { Override } from "../overrides"

export type TabsOverridesT = {
  Wrap?: Override<any>
}
export type TabsPropsT = {
  overrides?: TabsOverridesT
  current?: number
  tabListScroll?: boolean
}

export type TabListOverridesT = {
  TabListWrap?: StyleObject
}
export type TabListPropsT = {
  overrides?: TabListOverridesT
  children?: React.ReactNode
}

export type TabPropsT = {
  $id?: number
  children?: React.ReactNode
}

export type TabPanelsOverridesT = {
  TabPanelsWrap?: StyleObject
}
export type TabPanelsPropsT = {
  overrides?: TabPanelsOverridesT
  children?: React.ReactNode
}

export type TabPanelPropsT = {
  $id?: number
  children?: React.ReactNode
}
