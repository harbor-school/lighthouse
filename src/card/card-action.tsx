import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ActionWrap } from "./styled-components"
import { CardActionPropsT } from "./types"

export const CardAction: React.FC<CardActionPropsT> = ({ children, overrides = {} }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <ActionWrap $style={overrides.ActionWrap} {...sharedProps}>
      {children}
    </ActionWrap>
  )
}

CardAction.defaultProps = {}
