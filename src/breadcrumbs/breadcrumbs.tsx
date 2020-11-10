import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { Item, Separator, Wrap } from "./styled-components"
import { BreadcrumbsPropsT } from "./types"

export const Breadcrumbs: React.FC<BreadcrumbsPropsT> = ({ children, overrides = {} }) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const childrenArray = React.Children.toArray(children)

  return (
    <Wrap $style={overrides.Wrap} {...sharedProps}>
      {childrenArray.map((child, id) => (
        <Item key={id} {...sharedProps} $style={overrides.Item}>
          {child} {id !== childrenArray.length - 1 && <Separator {...sharedProps}>/</Separator>}
        </Item>
      ))}
    </Wrap>
  )
}

Breadcrumbs.defaultProps = {
  overrides: {},
}
