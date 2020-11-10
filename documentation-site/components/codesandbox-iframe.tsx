import * as React from "react"
import { useTheme } from "../../../lighthouse"
import { Iframe } from "./iframe"
import { isDarkMode } from "../utils"

export function CodeSandBoxIframe({ src }) {
  const theme = useTheme()
  return <Iframe src={`${src}&theme=${isDarkMode() ? "dark" : "light"}`} />
}

CodeSandBoxIframe.defaultProps = {}
