import * as System from "../../../../lighthouse"
import { Extendtable } from "../../utils"
import { motion } from "framer-motion"
import { styled } from "styletron-react"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const Grid = styled("div", ({ $theme }: Props) => {
  return {
    display: "grid",
    gridTemplateColumns: "2fr 10fr",
    [$theme.mediaQuery.large]: {
      gridTemplateColumns: "0fr 1fr",
    },
  }
})

export const ColumnRight = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale2400} 0`,
    maxWidth: "720px",
    width: "100%",
    margin: "0 auto",
    [$theme.mediaQuery.large]: {
      maxWidth: "100vw",
      padding: `${$theme.sizing.scale2400} ${$theme.sizing.scale700}`,
    },
  }
})

export const Overlay = styled(motion.div, ({ $theme }: Props) => {
  return {
    boxShadow: $theme.lighting.overlay500,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0px",
    zIndex: $theme.zIndex.overlay,
  }
})

export const OverlayLight = styled(motion.div, ({ $theme }: Props) => {
  return {
    boxShadow: $theme.lighting.overlay200,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0px",
    zIndex: $theme.zIndex.overlay,
  }
})

export const ThemeToggle = styled(motion.div, ({ $theme }: Props) => {
  return {
    position: "fixed",
    width: "36px",
    height: "36px",
    right: "80px",
    bottom: "60px",
    background: $theme.colors.primary,
    zIndex: $theme.zIndex.overlay,
    borderRadius: "100%",
    overflow: "hidden",
    cursor: "pointer",
    filter: "grayscale(1)",
    [$theme.mediaQuery.large]: {
      bottom: "5%",
      right: "5%",
    },
  }
})
