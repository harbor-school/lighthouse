import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { EndEnhancer, Wrap } from "./styled-components"
import { ListItemPropsT } from "./types"

export const ListItem: React.FC<ListItemPropsT> = ({
  children,
  endEnhancer,
  onClick = () => void 0,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <Wrap onClick={onClick} $style={overrides.Wrap} {...sharedProps}>
      {children}
      <EndEnhancer $style={overrides.EndEnhancer}>{endEnhancer}</EndEnhancer>
    </Wrap>
  )
}

ListItem.defaultProps = {
  overrides: {},
}
