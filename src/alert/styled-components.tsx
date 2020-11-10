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
    width: "450px",
    zIndex: $theme.zIndex.alert,

    [$theme.mediaQuery.medium]: {
      width: `calc(100% - (${$theme.sizing.scale900} * 2))`,
    },
  }
})

export const AlertBox = styled("div", ({ $theme, $kind }: Props<{ $kind: keyof typeof KIND }>) => {
  return {
    padding: `0 ${$theme.sizing.scale900}`,
    ...getKindStyles({ $theme, $kind }),
  }
})

export const AlertWrap = styled("div", ({ $theme }: Props) => {
  return {
    minHeight: "200px",
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
