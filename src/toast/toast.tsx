import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ToastPropsT } from "./types"
import { Wrap } from "./styled-components"

export const Toast: React.FC<ToastPropsT> = ({
  overrides = {},
  kind = "primary",
  message = "Message sent",
  buttonText = "Close",
}) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $kind: kind }

  return (
    <Wrap {...sharedProps} $style={overrides.Wrap}>
      {message}
      <System.Spacing width="scale400" />
      <System.Button shape="pill">{buttonText}</System.Button>
    </Wrap>
  )
}

Toast.defaultProps = {
  overrides: {},
}
