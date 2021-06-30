import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ToastPropsT } from "./types"
import { Wrap } from "./styled-components"

export const Toast: React.FC<ToastPropsT> = ({ overrides = {} }) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <Wrap {...sharedProps} $style={overrides.Wrap}>
      Toast
    </Wrap>
  )
}

Toast.defaultProps = {
  overrides: {},
}
