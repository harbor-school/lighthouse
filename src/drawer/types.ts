import { StyleObject } from "styletron-react"
import { PLACEMENT } from "./constants"

export type DrawerOverridesT = {
  Wrap?: StyleObject
}
export type DrawerPropsT = {
  isOpen?: boolean
  placement?: keyof typeof PLACEMENT
  children?: React.ReactNode
  onClickOutside?: (event: React.MouseEvent<HTMLElement>) => void
  overrides?: DrawerOverridesT
}
