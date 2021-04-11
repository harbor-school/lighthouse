import { Override } from "../overrides"

export type TabsOverridesT = {
  Wrap?: Override<any>
}
export type TabsPropsT = {
  overrides?: TabsOverridesT
  current?: number
  tabListScroll?: boolean
}

export type TabListPropsT = {
  children?: React.ReactNode
}

export type TabPropsT = {
  $id?: number
  children?: React.ReactNode
}

export type TabPanelsPropsT = {
  children?: React.ReactNode
}

export type TabPanelPropsT = {
  $id?: number
  children?: React.ReactNode
}
