import { motion } from "framer-motion"
import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { Icon } from "./icon"
import { MenuIconPropsT } from "./types"

export const Menu: React.FC<MenuIconPropsT> = ({
  width,
  height,
  color,
  align,
  active,
  ...rest
}) => {
  const theme = useContext(ThemeContext)
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 20 8",
  }
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
    animate: active ? "active" : "inactive",
    transition: {
      duration: theme.animation.timing200,
      ease: theme.animation.easeInCurve,
    },
  }
  return (
    <Icon {...iconProps}>
      <motion.path d="M0 0H20V2H0V0Z" fill={color} variants={pathTop} {...motionProps} />
      <motion.path d="M0 6H20V8H0V6Z" fill={color} variants={pathBottom} {...motionProps} />
    </Icon>
  )
}

Menu.defaultProps = {
  color: "black",
  active: false,
}
