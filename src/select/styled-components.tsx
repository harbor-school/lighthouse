import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", ({ $theme, $isOpen }: Props<{ $isOpen: boolean }>) => {
  return {
    position: "relative",
    zIndex: $isOpen ? $theme.zIndex.select : 0,
  }
})

export const Placeholder = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale500} ${$theme.sizing.scale600}`,
    cursor: "pointer",
    color: $theme.colors.contentSecondary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    ...$theme.typography.ParagraphSmall,
    ":hover": {
      color: $theme.colors.contentPrimary,
    },
  }
})

export const OptionList = styled("div", ({ $theme }: Props) => {
  return {
    position: "absolute",
    top: "100%",
    zIndex: $theme.zIndex.select,
    width: "100%",
  }
})

export const Option = styled(
  "div",
  ({ $theme, $selected, $disabled }: Props<{ $selected: boolean; $disabled: boolean }>) => {
    return {
      display: "flex",
      alignItems: "center",
      background: $theme.colors.backgroundPrimary,
      padding: `${$theme.sizing.scale500} ${$theme.sizing.scale600}`,
      justifyContent: "space-between",
      color: $disabled ? $theme.colors.contentTertiary : $theme.colors.contentSecondary,
      cursor: "pointer",
      position: "relative",
      textDecoration: "none",
      ...getOptionHoverStyle({ $theme, $disabled }),
      ...getOptionWarpSelectedStyle({ $theme, $selected }),
    }
  }
)

export const OptionLabel = styled("div", ({ $theme }: Props) => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    ...$theme.typography.ParagraphSmall,
  }
})

export const OptionEndEnhancer = styled("div", {})

function getOptionWarpSelectedStyle({ $theme, $selected }) {
  switch ($selected) {
    case true:
      return {
        background: $theme.colors.backgroundSecondary,
        color: $theme.colors.contentPrimary,
      }
    default:
      return Object.freeze({})
  }
}

function getOptionHoverStyle({ $theme, $disabled }) {
  if (!$disabled)
    return {
      ":hover": {
        background: $theme.colors.backgroundSecondary,
        color: $theme.colors.contentPrimary,
      },
    }
}
