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
        <System.FlexBox
          columnGap={theme.sizing.scale600}
          {...getFlexBoxStyles({ $tabListScroll: ctx.tabListScroll })}
        >
          {React.Children.map(children, (child, id) => (
            <System.FlexItem key={id} {...getFlexItemStyles({ $tabListScroll: ctx.tabListScroll })}>
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

export function getFlexBoxStyles({ $tabListScroll }) {
  if ($tabListScroll)
    return {
      overrides: {
        Block: {
          overflow: "scroll",
          "::-webkit-scrollbar": {
            width: "0px",
          },
        },
      },
    }
  else return Object.freeze({})
}

export function getFlexItemStyles({ $tabListScroll }) {
  if ($tabListScroll)
    return {
      minWidth: "initial",
    }
  else return Object.freeze({})
}
