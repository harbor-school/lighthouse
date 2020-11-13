import * as React from "react"
import { useTheme } from "../../../lighthouse"
import { Iframe } from "./iframe"
import { isDarkTheme } from "../utils"

export function CodeSandBoxIframe({ src }) {
  const theme = useTheme()
  return <Iframe src={`${src}&theme=${isDarkTheme({ theme }) ? "dark" : "light"}`} />
}

CodeSandBoxIframe.defaultProps = {}
