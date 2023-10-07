import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ToastPropsT } from "./types"
import { Wrap } from "./styled-components"
import { AnimatePresence } from "framer-motion"

export const Toast: React.FC<ToastPropsT> = ({
  overrides = {},
  show,
  kind,
  message,
  buttonText,
  onButtonClick = () => void 0,
}) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $kind: kind }

  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const toast = {
    hidden: {
      x: "-50%", // centering position
      y: `calc(100% + ${theme.sizing.scale800})`,
      transition: defaultTransition,
    },
    visible: {
      x: "-50%", // centering position
      y: `-${theme.sizing.scale800}`,
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
    // @ts-ignore
    <AnimatePresence>
      {show && (
        <Wrap {...sharedProps} {...motionProps} $style={overrides.Wrap}>
          {message}
          <System.Spacing width="scale400" />
          <System.Button shape="circle" kind={kind} onClick={onButtonClick}>
            {buttonText}
          </System.Button>
        </Wrap>
      )}
    </AnimatePresence>
  )
}

Toast.defaultProps = {
  show: false,
  kind: "primary",
  message: "Message sent",
  buttonText: "Close",
}
