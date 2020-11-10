import { AnimatePresence } from "framer-motion"
import * as React from "react"
import { useContext, useRef } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useOnClickOutside } from "../hooks"
import { KIND } from "./constants"
import {
  AlertBody,
  AlertBox,
  AlertHeader,
  AlertIcon,
  AlertMessage,
  AlertTitle,
  AlertWrap,
  Wrap,
} from "./styled-components"
import { AlertPropsT } from "./types"

export const Alert: React.FC<AlertPropsT> = ({
  title,
  body,
  message,
  kind = KIND.positive,
  show,
  closeOnClick,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $kind: kind }
  const ref = useRef(null)
  useOnClickOutside(ref, closeOnClick)
  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const modal = {
    hidden: { opacity: 0, top: "53%", transition: defaultTransition },
    visible: {
      opacity: 1,
      top: "50%",
      transition: { ...defaultTransition, delay: theme.animation.timing200 },
    },
  }
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: modal,
  }

  return (
    <AnimatePresence>
      {show && (
        <Wrap ref={ref} $style={overrides.Wrap} {...sharedProps} {...motionProps}>
          <AlertBox {...sharedProps}>
            <AlertWrap {...sharedProps}>
              <AlertHeader $style={overrides.AlertHeader} {...sharedProps}>
                <AlertTitle>{title}</AlertTitle>
              </AlertHeader>
              <AlertBody $style={overrides.AlertBody}>
                {body && <AlertIcon {...sharedProps}>{body}</AlertIcon>}
                <AlertMessage {...sharedProps}>{message}</AlertMessage>
              </AlertBody>
            </AlertWrap>
          </AlertBox>
        </Wrap>
      )}
    </AnimatePresence>
  )
}

Alert.defaultProps = {
  overrides: {},
  title: "Title",
  message: "Message",
  kind: KIND.positive,
  show: false,
}
