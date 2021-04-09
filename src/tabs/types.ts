import { Override } from "../overrides"
import { PLACEMENT } from "./constants"

export type TabsOverridesT = {
  Wrap?: Override<any>
}
export type TabsPropsT = {
  overrides?: TabsOverridesT
  placement?: keyof typeof PLACEMENT
  initial?: number
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
