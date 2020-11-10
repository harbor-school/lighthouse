import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", ({ $theme }: Props) => {
  return {
    width: "100%",
    height: $theme.sizing.scale500,
    background: $theme.colors.backgroundSecondary,
    borderRadius: "1000px",
    position: "relative",
    overflow: "hidden",
  }
})

export const Bar = styled(motion.div, ({ $theme, $value }: Props<{ $value: number }>) => {
  return {
    height: "100%",
    background: $theme.colors.contentSecondary,
    borderRadius: "1000px",
    position: "absolute",
    width: `${$value}%`,
  }
})
