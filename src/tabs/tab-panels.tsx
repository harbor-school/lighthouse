import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabPanelsWrap } from "./styled-components"
import { TabPanelsPropsT } from "./types"

export const TabPanels: React.FC<TabPanelsPropsT> = ({ overrides = {}, children }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <TabPanelsWrap {...sharedProps} $style={overrides.TabPanelsWrap}>
      {Array.isArray(children) &&
        children.map(
          (child, id) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
                  // @ts-ignore
              $id: id,
            })
        )}
    </TabPanelsWrap>
  )
}
