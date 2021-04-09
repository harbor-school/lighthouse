import { styled } from "styletron-react"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const MotionWrap = styled(motion.div, {})

export const Wrap = styled(
  motion.div,
  ({ $theme, onClick }: Props<{ onClick?: (event: React.MouseEvent<HTMLDivElement>) => void }>) => {
    return {
      position: "relative",
      padding: `${$theme.sizing.scale800} ${$theme.sizing.scale700}`,
      background: $theme.colors.backgroundSecondary,
      height: "fit-content",
      cursor: onClick ? "pointer" : "initial",
      textDecoration: "none",
      display: "inline-block",
    }
  }
)

export const Content = styled("div", {
  position: "relative",
})

export const TextWrap = styled("div", {
  position: "relative",
})

export const LabelText = styled("div", ({ $theme }: Props) => {
  return {
    ...$theme.typography.LabelSmall,
    textAlign: "left",
    marginBottom: $theme.sizing.scale700,
    color: $theme.colors.contentPrimary,
  }
})

export const TitleText = styled("div", ({ $theme }: Props) => {
  return {
    marginBottom: $theme.sizing.scale700,
    color: $theme.colors.contentPrimary,
    ...$theme.typography.HeadingSmall,
    textAlign: "left",
  }
})

export const Desc = styled("div", ({ $theme }: Props) => {
  return {
    marginBottom: $theme.sizing.scale1400,
  }
})

export const DescText = styled("div", ({ $theme }: Props) => {
  return {
    color: $theme.colors.contentPrimary,
    ...$theme.typography.ParagraphMedium,
    textAlign: "left",
  }
})

export const BottomWrap = styled("div", { width: "100%" })

export const ActionWrap = styled("div", { display: "flex", justifyContent: "flex-end" })

export const BodyWrap = styled("div", ({ $theme }: Props) => {
  return {
    color: $theme.colors.contentPrimary,
    textAlign: "left",
    marginBottom: $theme.sizing.scale1400,
    display: "flex", // remove inner space after texts
    ...$theme.typography.ParagraphMedium,
  }
})
