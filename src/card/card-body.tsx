import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { BodyWrap } from "./styled-components"
import { CardBodyPropsT } from "./types"

export const CardBody: React.FC<CardBodyPropsT> = ({ children, overrides = {} }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <BodyWrap $style={overrides.BodyWrap} {...sharedProps}>
      {children}
    </BodyWrap>
  )
}

CardBody.defaultProps = {}
