import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ToastPropsT } from "./types"
import { Wrap } from "./styled-components"
import { AnimatePresence } from "framer-motion"

export const Toast: React.FC<ToastPropsT> = ({
  overrides = {},
  kind = "primary",
  message = "Message sent",
  buttonText = "Close",
  onButtonClick = () => void 0,
  show = "false",
}) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $kind: kind }

  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const toast = {
    hidden: { bottom: `-${theme.sizing.scale800}`, transition: defaultTransition },
    visible: {
      bottom: theme.sizing.scale800,
      transition: defaultTransition,
    },
  }
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: toast,
  }

  return (
    <AnimatePresence>
      {show && (
        <Wrap {...sharedProps} {...motionProps} $style={overrides.Wrap}>
          {message}
          <System.Spacing width="scale400" />
          <System.Button shape="pill" kind={kind} onClick={onButtonClick}>
            {buttonText}
          </System.Button>
        </Wrap>
      )}
    </AnimatePresence>
  )
}

Toast.defaultProps = {
  overrides: {},
}
