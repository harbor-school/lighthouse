import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../lighthouse"

export function AnimateOptions({ children, isOpen, animate, setReadyToChange }) {
  const theme = useContext(ThemeContext)
  const motionProps = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: theme.animation.timing200,
        ease: theme.animation.easeInCurve,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: theme.animation.timing100,
        ease: theme.animation.easeInCurve,
      },
    },
  }

  if (animate)
    return (
    // @ts-ignore
      <AnimatePresence onExitComplete={() => setReadyToChange(true)}>
        {isOpen && <motion.div {...motionProps}>{children}</motion.div>}
      </AnimatePresence>
    )
  else return isOpen && <div>{children}</div>
}

AnimateOptions.defaultProps = {}
