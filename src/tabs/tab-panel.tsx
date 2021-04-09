import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsContext } from "../helpers/tabs-provider"
import { TabPanelWrap } from "./styled-components"
import { TabPanelPropsT } from "./types"

export const TabPanel: React.FC<TabPanelPropsT> = ({ children, $id }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const ctx = useContext(TabsContext)
  const isActive = $id === ctx.activeTab

  return isActive ? <TabPanelWrap {...sharedProps}>{children}</TabPanelWrap> : <></>
}
