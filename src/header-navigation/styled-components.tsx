import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Header = styled("header", ({ $theme }: Props) => {
  return {
    width: "100%",
    background: $theme.colors.backgroundPrimary,
  }
})

export const HeaderWrap = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale900} ${$theme.sizing.scale900}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export const NavigationItemWrap = styled("button", ({ $theme }: Props) => {
  return {
    border: "none",
    outline: "none",
    background: "none",
    cursor: "pointer",
    marginLeft: $theme.sizing.scale1200,
  }
})
