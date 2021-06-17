import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ProgressBarPropsT } from "./types"
import * as System from "../lighthouse"
import { motion } from "framer-motion"

export const ProgressBar: React.FC<ProgressBarPropsT> = ({
  value = 30,
  infinite,
  overrides = {},
  track = "",
  color = "",
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $value: value }

  return (
    <System.Block
      width="100%"
      height="scale500"
      background={theme.colors[track]}
      borderRadius="1000px"
      position="relative"
      overflow="hidden"
      overrides={{
        Block: overrides.Wrap,
      }}
      {...sharedProps}
    >
      <System.Block
        as={motion.div}
        height="100%"
        background={theme.colors[color]}
        borderRadius="1000px"
        position="absolute"
        width={`${value}%`}
        overrides={{
          Block: overrides.Bar,
        }}
        {...getMotionProps({ ...sharedProps, $infinite: infinite })}
        {...sharedProps}
      />
    </System.Block>
  )
}

ProgressBar.defaultProps = {
  overrides: {},
  value: 30,
  infinite: false,
  track: "backgroundSecondary",
  color: "contentSecondary",
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
