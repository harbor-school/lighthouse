import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { NavigationItemWrap } from "./styled-components"
import { HeaderNavigationItemPropsT } from "./types"

export const HeaderNavigationItem: React.FC<HeaderNavigationItemPropsT> = ({
  children,
  onClick = () => void 0,
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <NavigationItemWrap onClick={onClick} {...sharedProps}>
      {children}
    </NavigationItemWrap>
  )
}
