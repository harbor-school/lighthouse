import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { HeaderNavigationPropsT } from "./types"
import { Nav, NavWrap } from "./styled-components"

export const HeaderNavigation: React.FC<HeaderNavigationPropsT> = ({
  children,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <Nav $style={overrides.Header} {...sharedProps}>
      <NavWrap {...sharedProps}>{children}</NavWrap>
    </Nav>
  )
}

HeaderNavigation.defaultProps = {
  overrides: {},
}
