import { styled } from "styletron-react"
import { KIND } from "./constants"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled(motion.div, ({ $theme }: Props) => {
  return {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: $theme.zIndex.alert,
  }
})

export const InnerWrap = styled("div", ({ $theme, $kind }: Props<{ $kind: keyof typeof KIND }>) => {
  return {
    minWidth: "450px",
    minHeight: "200px",
    padding: `0 ${$theme.sizing.scale900}`,
    ...getKindStyles({ $theme, $kind }),
    [$theme.mediaQuery.medium]: {
      minWidth: `calc(100vw - (${$theme.sizing.scale900} * 2))`,
      boxSizing: "border-box",
    },
  }
})

export const AlertContent = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale1200} 0`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
})

export const AlertHeader = styled("div", ({ $theme }: Props) => {
  return {
    marginBottom: `${$theme.sizing.scale1200}`,
    color: `${$theme.colors.contentInversePrimary}`,
    textAlign: "center",
    ...$theme.typography.HeadingMedium,
  }
})

export const AlertBody = styled("div", {})

export const AlertTitle = styled("div", {})

export const AlertIcon = styled("div", ({ $theme }: Props) => {
  return {
    marginBottom: `${$theme.sizing.scale900}`,
    textAlign: "center",
  }
})

export const AlertMessage = styled("p", ({ $theme }: Props) => {
  return {
    color: `${$theme.colors.contentInversePrimary}`,
    textAlign: "center",
    overflow: "scroll",
    margin: "0px",
    padding: "0px",
    maxWidth: "450px",
    "::-webkit-scrollbar": {
      width: "0px",
    },
    ...$theme.typography.ParagraphSmall,
  }
})

function getKindStyles({ $theme, $kind }) {
  switch ($kind) {
    case KIND.positive:
      return {
        background: $theme.colors.primary,
      }
    case KIND.negative:
      return {
        background: $theme.colors.negative,
      }
    default:
      return Object.freeze({})
  }
}
