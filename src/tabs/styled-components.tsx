import { styled } from "styletron-react"
import { motion } from "framer-motion"

export const Wrap = styled("div", ({ $theme }: any) => {
  return {}
})

export const TabListWrap = styled("div", ({ $theme, $tabListScroll }: any) => {
  return {
    ...getTabListStyles({ $tabListScroll }),
  }
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

export function getTabListStyles({ $tabListScroll }) {
  if ($tabListScroll)
    return {
      overflow: "scroll",
      "::-webkit-scrollbar": {
        width: "0px",
      },
    }
  else return Object.freeze({})
}

export function getFlexItemStyles({ $tabListScroll }) {
  if ($tabListScroll)
    return {
      minWidth: "initial",
    }
  else return Object.freeze({})
}
