import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { HeaderNavigationPropsT } from "./types"
import { Header, HeaderWrap } from "./styled-components"

export const HeaderNavigation: React.FC<HeaderNavigationPropsT> = ({
  children,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <Header $style={overrides.Header} {...sharedProps}>
      <HeaderWrap {...sharedProps}>{children}</HeaderWrap>
    </Header>
  )
}

HeaderNavigation.defaultProps = {
  overrides: {},
}
