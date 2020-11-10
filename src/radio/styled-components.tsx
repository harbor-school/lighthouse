import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"
import { FieldError } from "react-hook-form"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("label", {
  display: "flex",
  alignItems: "center",
})

export const RadioContainer = styled("div", {})

export const HiddenRadio = styled("input", {
  border: "0",
  clip: "rect(0 0 0 0)",
  clippath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
})

export const StyledRadio = styled(
  "div",
  ({ $theme, $error }: Props<{ $error: FieldError | undefined }>) => {
    return {
      width: $theme.sizing.scale600,
      height: $theme.sizing.scale600,
      background: $error ? $theme.colors.negative100 : $theme.colors.backgroundSecondary,
      overflow: "hidden",
      borderRadius: "100%",
    }
  }
)

export const Circle = styled(motion.div, ({ $theme }: Props) => {
  return {
    width: $theme.sizing.scale600,
    height: $theme.sizing.scale600,
    background: $theme.colors.primary,
    borderRadius: "100%",
  }
})
