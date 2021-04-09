import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsPropsT } from "./types"
import { PLACEMENT } from "./constants"
import { Wrap as StyledWrap } from "./styled-components"
import { getOverrides } from "../helpers/overrides"

export const Tabs: React.FC<TabsPropsT> = ({ overrides = {}, placement }) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $placement: placement }
  const [Wrap, wrapProps] = getOverrides(overrides.Wrap, StyledWrap)

  return (
    <Wrap {...sharedProps} {...wrapProps}>
      Tabs
    </Wrap>
  )
}

Tabs.defaultProps = {
  overrides: {},
  placement: PLACEMENT.center,
}
