import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { Round, Wrap } from "./styled-components"
import { SpinnerPropsT } from "./types"

export const Spinner: React.FC<SpinnerPropsT> = ({ overrides = {} }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const defaultTransition = {
    loop: Infinity,
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing2000,
  }
  const motionRotateProps = {
    animate: { rotate: [90, 270, 450] },
    transition: defaultTransition,
  }

  return (
    <Wrap {...sharedProps} {...motionRotateProps}>
      <Round $style={overrides.Round} {...sharedProps} />
    </Wrap>
  )
}

Spinner.defaultProps = {}
