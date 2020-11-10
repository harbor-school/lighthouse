import * as System from "../../../../lighthouse"
import { Extendtable } from "../../utils"
import { motion } from "framer-motion"
import { styled } from "styletron-react"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const Wrap = styled("nav", ({ $theme }: Props) => {
  return {
    position: "sticky",
    top: $theme.sizing.scale1600,
    height: `calc(100vh - ${$theme.sizing.scale1600})`,
    overflowY: "scroll",
    background: $theme.colors.backgroundSecondary,
    [$theme.mediaQuery.large]: {
      position: "relative",
      top: "initial",
      paddingTop: $theme.sizing.scale1600, // add instead of the top (heading height)
    },
  }
})

export const MenuItem = styled(motion.a, ({ $theme }: Props) => {
  return {
    display: "block",
    padding: `${$theme.sizing.scale600} ${$theme.sizing.scale700}`,
    background: $theme.colors.backgroundSecondary,
    color: $theme.colors.contentPrimary,
    ...$theme.typography.ParagraphSmall,
  }
})
