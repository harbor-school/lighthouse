import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled(motion.div, ({ $theme }: Props) => {
  return {
    width: $theme.sizing.scale1200,
    height: $theme.sizing.scale1200,
  }
})

export const Round = styled(motion.div, ({ $theme }: Props) => {
  return {
    width: $theme.sizing.scale600,
    height: $theme.sizing.scale600,
    borderRadius: "100%",
    backgroundColor: $theme.colors.primary,
  }
})
