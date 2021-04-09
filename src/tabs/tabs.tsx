import * as React from "react"
import { useContext, useState } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsPropsT } from "./types"
import { PLACEMENT } from "./constants"
import { Wrap as StyledWrap } from "./styled-components"
import { getOverrides } from "../helpers/overrides"
import { TabsContext } from "../helpers/tabs-provider"

export const Tabs: React.FC<TabsPropsT> = ({ overrides = {}, placement, children }) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $placement: placement }
  const [Wrap, wrapProps] = getOverrides(overrides.Wrap, StyledWrap)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <Wrap {...sharedProps} {...wrapProps}>
        {children}
      </Wrap>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = {
  overrides: {},
  placement: PLACEMENT.center,
}
