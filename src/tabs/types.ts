import { Override } from "../overrides"
import { PLACEMENT } from "./constants"

export type TabsOverridesT = {
  Wrap?: Override<any>
}
export type TabsPropsT = {
  overrides?: TabsOverridesT
  placement?: keyof typeof PLACEMENT
}
