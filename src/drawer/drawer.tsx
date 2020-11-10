import { AnimatePresence } from "framer-motion"
import * as React from "react"
import { useContext, useRef } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useOnClickRectOutside } from "../hooks"
import { PLACEMENT } from "./constants"
import { Wrap } from "./styled-components"
import { DrawerPropsT } from "./types"

export const Drawer: React.FC<DrawerPropsT> = ({
  children,
  isOpen,
  onClickOutside,
  placement = "top",
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $placement: placement }
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: getPlacementMotionProps({ $theme: theme, $placement: placement }),
  }
  const ref = useRef(null)
  useOnClickRectOutside(ref, onClickOutside)

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrap ref={ref} $style={overrides.Wrap} {...sharedProps} {...motionProps}>
          {children}
        </Wrap>
      )}
    </AnimatePresence>
  )
}

Drawer.defaultProps = {
  overrides: {},
  isOpen: true,
  placement: "top",
  onClickOutside: () => null, // cannot use void in javascript as return value
}

function getPlacementMotionProps({ $theme, $placement }) {
  const defaultTransition = {
    ease: $theme.animation.easeInCurve,
    duration: $theme.animation.timing200,
  }
  const opacityHidden = {
    opacity: 0,
    transition: defaultTransition,
  }
  const opacityVisible = {
    opacity: 1,
    transition: { ...defaultTransition, delay: $theme.animation.timing200 },
  }
  switch ($placement) {
    case PLACEMENT.top:
      return {
        hidden: {
          top: "-3%",
          ...opacityHidden,
        },
        visible: {
          top: "0%",
          ...opacityVisible,
        },
      }
    case PLACEMENT.right:
      return {
        hidden: {
          right: "-3%",
          ...opacityHidden,
        },
        visible: {
          right: "0%",
          ...opacityVisible,
        },
      }
    case PLACEMENT.left:
      return {
        hidden: {
          left: "-3%",
          ...opacityHidden,
        },
        visible: {
          left: "0%",
          ...opacityVisible,
        },
      }
    case PLACEMENT.bottom:
      return {
        hidden: {
          bottom: "-3%",
          ...opacityHidden,
        },
        visible: {
          bottom: "0%",
          ...opacityVisible,
        },
      }
    default:
      return Object.freeze({})
  }
}
