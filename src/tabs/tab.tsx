import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TabsContext } from "../helpers/tabs-provider"
import { TabActiveBar, TabWrap } from "./styled-components"
import { TabPropsT } from "./types"
import * as System from "../lighthouse"
import { motion } from "framer-motion"

export const Tab: React.FC<TabPropsT> = ({ children, $id }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const ctx = useContext(TabsContext)
  const isActive = $id === ctx.activeTab

  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const textMotionProps = {
    animate: {
      color: isActive ? theme.colors.primary : theme.colors.contentPrimary,
    },
    transition: defaultTransition,
  }
  const barMotionProps = {
    layoutId: "tab-active-bar",
    transition: defaultTransition,
  }

  return (
    <TabWrap onClick={() => ctx.setActiveTab($id)} {...sharedProps}>
      <System.LabelMedium
        as={motion.div}
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        {...textMotionProps}
      >
        {children}
      </System.LabelMedium>
      {isActive && <TabActiveBar {...sharedProps} {...barMotionProps} />}
    </TabWrap>
  )
}
