import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { TOAST_KIND } from "./constants"

export const Wrap = styled(motion.div, ({ $theme, $kind }: any) => {
  return {
    ...getKindStyles({ $theme, $kind }),
  }
})

function getKindStyles({ $theme, $kind }) {
  switch ($kind) {
    case TOAST_KIND.primary:
      return {
        backgroundColor: $theme.colors.backgroundSecondary,
      }
    case TOAST_KIND.secondary:
      return {
        backgroundColor: $theme.colors.backgroundPrimary,
      }

    default:
      return Object.freeze({})
  }
}
