import * as React from "react"
import { useContext, useEffect, useState } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsPropsT } from "./types"
import { Wrap as StyledWrap } from "./styled-components"
import { getOverrides } from "../helpers/overrides"
import { TabsContext } from "../helpers/tabs-provider"

export const Tabs: React.FC<TabsPropsT> = ({
  overrides = {},
  children,
  current,
  tabListScroll,
}) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const [Wrap, wrapProps] = getOverrides(overrides.Wrap, StyledWrap)

  const [activeTab, setActiveTab] = useState(current)
  useEffect(() => {
    setActiveTab(current)
  }, [current])

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabListScroll }}>
      <Wrap {...sharedProps} {...wrapProps}>
        {children}
      </Wrap>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = {
  overrides: {},
  current: 0,
}
