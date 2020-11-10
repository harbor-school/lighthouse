import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { ListItemLabelWrap } from "./styled-components"
import { ListItemLabelPropsT } from "./types"

export const ListItemLabel: React.FC<ListItemLabelPropsT> = ({ overrides = {}, children }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <ListItemLabelWrap $style={overrides.ListItemLabelWrap} {...sharedProps}>
      {children}
    </ListItemLabelWrap>
  )
}

ListItemLabel.defaultProps = {
  overrides: {},
}
