import * as System from "../../../../lighthouse"
import { Extendtable } from "../../utils"
import { styled } from "styletron-react"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const Heading = styled("div", ({ $theme }: Props) => {
  return {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "56%",
    [$theme.mediaQuery.large]: {
      width: "initial",
    },
  }
})
