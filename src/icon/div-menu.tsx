import { motion } from "framer-motion"
import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { MenuIconPropsT } from "./types"
import * as System from "../lighthouse"

export const DivMenu: React.FC<MenuIconPropsT> = ({ active, ...rest }) => {
  const theme = useContext(ThemeContext)
  const pathTop = {
    active: {
      rotate: 45,
      y: 3,
    },
    inactive: {
      rotate: 0,
      y: 0,
    },
  }
  const pathBottom = {
    active: {
      rotate: -45,
      y: -3,
    },
    inactive: {
      rotate: 0,
      y: 0,
    },
  }
  const motionProps = {
    initial: "inactive",
    animate: active ? "active" : "inactive",
    transition: {
      duration: theme.animation.timing200,
      ease: theme.animation.easeInCurve,
    },
  }
  return (
    <System.Block width="20px" display="flex" flexDirection="column" justifyContent="center">
      <System.Block
        as={motion.div}
        height="2px"
        backgroundColor="primary"
        // @ts-ignore
        variants={pathTop}
        {...motionProps}
      />
      <System.Block
        as={motion.div}
        height="2px"
        backgroundColor="primary"
        marginTop="4px"
        // @ts-ignore
        variants={pathBottom}
        {...motionProps}
      />
    </System.Block>
  )
}

DivMenu.defaultProps = {
  color: "black",
  active: false,
}
