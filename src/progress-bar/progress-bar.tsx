import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { Bar, Wrap } from "./styled-components"
import { ProgressBarPropsT } from "./types"

export const ProgressBar: React.FC<ProgressBarPropsT> = ({
  value = 30,
  infinite,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $value: value }

  return (
    <Wrap $style={overrides.Wrap} {...sharedProps}>
      <Bar
        $style={overrides.Bar}
        {...getMotionProps({ ...sharedProps, $infinite: infinite })}
        {...sharedProps}
      />
    </Wrap>
  )
}

ProgressBar.defaultProps = {
  overrides: {},
  value: 30,
}

function getMotionProps({ $theme, $value, $infinite }) {
  if ($infinite) {
    return {
      animate: {
        left: "100%",
      },
      transition: {
        loop: Infinity,
        ease: $theme.animation.easeInCurve,
        duration: $theme.animation.timing2000,
      },
    }
  } else {
    return {
      animate: {
        width: `${$value}%`,
      },
      transition: {
        ease: $theme.animation.easeInCurve,
        duration: $theme.animation.timing2000,
      },
    }
  }
}
