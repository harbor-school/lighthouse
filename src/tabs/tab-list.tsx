import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsContext } from "../helpers/tabs-provider"
import { getFlexItemStyles, TabListWrap } from "./styled-components"
import { TabListPropsT } from "./types"
import * as System from "../lighthouse"
import { AnimateSharedLayout } from "framer-motion"

export const TabList: React.FC<TabListPropsT> = ({ overrides = {}, children }) => {
  const theme = useContext(ThemeContext)
  const ctx = useContext(TabsContext)
  const sharedProps = { $theme: theme, $tabListScroll: ctx.tabListScroll }

  return (
    <AnimateSharedLayout>
      <TabListWrap {...sharedProps} $style={overrides.TabListWrap}>
        <System.FlexBox columnGap={theme.sizing.scale600}>
          {React.Children.map(children, (child, id) => (
            <System.FlexItem key={id} {...getFlexItemStyles(sharedProps)}>
              {React.isValidElement(child) &&
                React.cloneElement(child, {
                  $id: id,
                })}
            </System.FlexItem>
          ))}
        </System.FlexBox>
      </TabListWrap>
    </AnimateSharedLayout>
  )
}
