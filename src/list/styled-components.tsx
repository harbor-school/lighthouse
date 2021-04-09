import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", ({ $theme }: Props) => {
  return {
    background: $theme.colors.backgroundSecondary,
    padding: `${$theme.sizing.scale600} ${$theme.sizing.scale700}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }
})

export const ListItemLabelWrap = styled("div", ({ $theme }: Props) => {
  return {
    color: $theme.colors.contentPrimary,
    ...$theme.typography.LabelMedium,
  }
})

export const EndEnhancer = styled("span", {})
