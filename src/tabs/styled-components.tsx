import { styled } from "styletron-react"
import { PLACEMENT } from "./constants"
import { motion } from "framer-motion"

export const Wrap = styled("div", ({ $theme, $placement }: any) => {
  return {}
})

export const TabListWrap = styled("div", ({ $theme }: any) => {
  return {}
})

export const TabWrap = styled("div", ({ $theme }: any) => {
  return {
    position: "relative",
    padding: `${$theme.sizing.scale800} 0px`,
    cursor: "pointer",
  }
})
export const TabActiveBar = styled(motion.div, ({ $theme }: any) => {
  return {
    width: "100%",
    height: "2px",
    background: $theme.colors.primary,
    position: "absolute",
    bottom: "0px",
    left: "0px",
  }
})

export const TabPanelsWrap = styled("div", ({ $theme }: any) => {
  return {}
})

export const TabPanelWrap = styled("div", ({ $theme }: any) => {
  return {}
})
