import * as React from "react"
import { useContext } from "react"
import * as System from "../lighthouse"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ToastPropsT } from "./types"
import { PLACEMENT } from "./constants"
import { Wrap } from "./styled-components"

export const Toast: React.FC<ToastPropsT> = ({ overrides = {}, placement }) => {
  const theme: System.ThemeT = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $placement: placement }

  return (
    <Wrap {...sharedProps} $style={overrides.Wrap}>
      Toast
    </Wrap>
  )
}

Toast.defaultProps = {
  overrides: {},
  placement: PLACEMENT.center,
}
