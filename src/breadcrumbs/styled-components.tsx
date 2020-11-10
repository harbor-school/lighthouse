import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", {
  display: "flex",
  alignItems: "center",
})

export const Item = styled("div", ({ $theme }: Props) => {
  return {
    display: "flex",
    alignItems: "center",
    color: $theme.colors.contentSecondary,
    ...$theme.typography.ParagraphSmall,
  }
})

export const Separator = styled("span", ({ $theme }: Props) => {
  return {
    color: $theme.colors.contentSecondary,
    ...$theme.typography.ParagraphSmall,
  }
})
