import * as System from "../../../../lighthouse"
import { Extendtable } from "../../utils"
import { styled } from "styletron-react"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const Wrap = styled("header", ({ $theme, $home }: Props<{ $home: boolean }>) => {
  return {
    padding: `${$theme.sizing.scale700} ${$theme.sizing.scale800}`,
    background: $theme.colors.primaryA,
    position: "sticky",
    top: "0px",
    zIndex: $theme.zIndex.header,
    display: $home ? "none" : "block",
  }
})

export const LogoArea = styled("div", {
  background: "green",
  display: "flex",
})
