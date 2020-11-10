import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { PLACEMENT } from "./constants"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled(
  motion.div,
  ({ $theme, $placement }: Props<{ $placement: keyof typeof PLACEMENT }>) => {
    return {
      position: "fixed",
      zIndex: $theme.zIndex.drawer,
      background: $theme.colors.backgroundSecondary,
      ...getPlacementStyles({ $placement }),
    }
  }
)

function getPlacementStyles({ $placement }) {
  switch ($placement) {
    case PLACEMENT.top:
      return {
        top: "0px",
        width: "100%",
      }
    case PLACEMENT.right:
      return {
        top: "0px",
        right: "0px",
        height: "100%",
      }
    case PLACEMENT.left:
      return {
        top: "0px",
        left: "0px",
        height: "100%",
      }
    case PLACEMENT.bottom:
      return {
        bottom: "0px",
        left: "0px",
        width: "100%",
      }
    default:
      return Object.freeze({})
  }
}
