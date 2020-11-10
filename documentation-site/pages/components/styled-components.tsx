import { styled } from "styletron-react"
import * as System from "../../../../lighthouse"
import { Extendtable } from "../../utils"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const CompilerWrap = styled("div", ({ $theme }: Props) => {
  return {
    background: $theme.colors.backgroundPrimaryAccent,
    padding: `${$theme.sizing.scale900} ${$theme.sizing.scale900}`,
    [$theme.mediaQuery.large]: {
      padding: `${$theme.sizing.scale700} ${$theme.sizing.scale700}`,
    },
  }
})
