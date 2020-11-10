import { styled } from "styletron-react"
import { isEmpty } from "../utils/is-empty"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const FormWrap = styled("form", {})

export const FormFooter = styled("div", ({ $theme, $errors }: Props<{ $errors }>) => {
  return {
    marginTop: $theme.sizing.scale1200,
    ...getFooterErrorStyles($errors),
  }
})

function getFooterErrorStyles($errors) {
  if (!isEmpty($errors))
    return {
      filter: "grayscale(1)",
      pointerEvents: "none",
    }
  else return Object.freeze({})
}
