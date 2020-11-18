import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", ({ $theme }: Props) => {
  return {
    background: $theme.colors.backgroundPrimary,
  }
})

export const Headers = styled("div", ({ $theme }: Props) => {
  return {
    background: $theme.colors.backgroundSecondary,
    display: "flex",
  }
})

export const HeaderCell = styled(
  "div",
  ({ $theme, $id, $flexAmounts }: Props<{ $id: number; $flexAmounts: number[] }>) => {
    return {
      flex: $flexAmounts[$id],
      padding: `${$theme.sizing.scale500} ${$theme.sizing.scale600}`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      boxSizing: "border-box",
      color: $theme.colors.contentPrimary,
      ...$theme.typography.LabelMedium,
    }
  }
)

export const Datas = styled("div", {
  display: "flex",
  alignItems: "center",
})

export const DataCell = styled(
  "div",
  ({ $theme, $id, $flexAmounts }: Props<{ $id: number; $flexAmounts: number[] }>) => {
    return {
      flex: $flexAmounts[$id],
      padding: `${$theme.sizing.scale300} ${$theme.sizing.scale600}`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      boxSizing: "border-box",
      color: $theme.colors.contentPrimary,
      ...$theme.typography.ParagraphSmall,
    }
  }
)
