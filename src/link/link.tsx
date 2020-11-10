import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { TARGET } from "./constants"
import { Link } from "./styled-components"
import { StyledLinkPropsT } from "./types"

export const StyledLink: React.FC<StyledLinkPropsT> = ({
  href,
  children,
  highlight = false,
  target,
  onClick,
  as,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $highlight: highlight }
  return (
    <Link
      href={href}
      target={target}
      onClick={onClick}
      $as={as}
      $style={overrides.Link}
      {...sharedProps}
    >
      {children}
    </Link>
  )
}

StyledLink.defaultProps = {
  target: TARGET._self,
  as: "a",
}
