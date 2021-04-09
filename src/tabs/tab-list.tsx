import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsContext } from "../helpers/tabs-provider"
import { TabListWrap } from "./styled-components"
import { TabListPropsT } from "./types"
import * as System from "../lighthouse"
import { AnimateSharedLayout } from "framer-motion"

export const TabList: React.FC<TabListPropsT> = ({ children }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const ctx = useContext(TabsContext)

  return (
    <AnimateSharedLayout>
      <TabListWrap {...sharedProps}>
        <System.FlexBox columnGap={theme.sizing.scale600}>
          {React.Children.map(children, (child, id) => (
            <System.FlexItem key={id}>
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
