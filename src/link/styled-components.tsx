import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Link = styled("a", ({ $theme, $highlight }: Props<{ $highlight: boolean }>) => {
  return {
    // remove link styles
    textDecoration: "none",
    color: $theme.colors.contentPrimary,
    cursor: "pointer",
    display: "inline-block",
    // start new styles
    ...$theme.typography.ParagraphSmall,
    ...getHighlightStyles({ $theme, $highlight }),
  }
})

function getHighlightStyles({ $theme, $highlight }) {
  if ($highlight)
    return {
      ...$theme.typography.LabelSmall,
      color: $theme.colors.primary,
    }
  else return {}
}
