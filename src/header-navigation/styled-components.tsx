import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Nav = styled("nav", ({ $theme }: Props) => {
  return {
    width: "100%",
  }
})

export const NavWrap = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale900} ${$theme.sizing.scale900}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export const NavigationItemWrap = styled("div", ({ $theme }: Props) => {
  return {
    border: "none",
    outline: "none",
    background: "none",
    cursor: "pointer",
    marginLeft: $theme.sizing.scale1200,
  }
})
