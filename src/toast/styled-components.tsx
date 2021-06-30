import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { TOAST_KIND } from "./constants"

export const Wrap = styled(motion.div, ({ $theme, $kind }: any) => {
  return {
    paddingTop: $theme.sizing.scale100,
    paddingRight: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale500,
    borderRadius: "1000px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: $theme.sizing.scale800,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: $theme.zIndex.toast,
    ...$theme.typography.LabelMedium,
    ...getKindStyles({ $theme, $kind }),
  }
})

function getKindStyles({ $theme, $kind }) {
  switch ($kind) {
    case TOAST_KIND.primary:
      return {
        color: $theme.colors.primary,
        backgroundColor: $theme.colors.backgroundTertiary,
      }
    case TOAST_KIND.secondary:
      return {
        color: $theme.colors.contentSecondary,
        backgroundColor: $theme.colors.backgroundSecondary,
      }

    default:
      return Object.freeze({})
  }
}
