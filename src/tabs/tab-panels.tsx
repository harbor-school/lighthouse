import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabPanelsWrap } from "./styled-components"
import { TabPanelsPropsT } from "./types"

export const TabPanels: React.FC<TabPanelsPropsT> = ({ children }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <TabPanelsWrap {...sharedProps}>
      {Array.isArray(children) &&
        children.map(
          (child, id) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              $id: id,
            })
        )}
    </TabPanelsWrap>
  )
}
