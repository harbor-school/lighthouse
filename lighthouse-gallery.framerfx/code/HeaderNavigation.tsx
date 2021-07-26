import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import * as System from "../../../lighthouse"
import { withHOC } from "./utils/withHOC"

const defaultValue = [
  { text: "Menu 0", highlight: false },
  { text: "Menu 1", highlight: false },
  { text: "Menu 2", highlight: true },
]

const InnerHeaderNavigation = ({ logo, items = defaultValue, ...props }) => {
  return (
    <System.HeaderNavigation {...props}>
      <System.Block>
        {!logo.length && <System.DisplayXSmall>Your Logo</System.DisplayXSmall>}
        {logo && <div className="header-navigation-logo-wrap">{logo}</div>}
      </System.Block>
      <System.Block>
        {items.map((item, i) => (
          <System.HeaderNavigationItem key={i}>
            <System.StyledLink highlight={item.highlight}>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </System.StyledLink>
          </System.HeaderNavigationItem>
        ))}
      </System.Block>
    </System.HeaderNavigation>
  )
}

export const HeaderNavigation = withHOC(InnerHeaderNavigation)

HeaderNavigation.defaultProps = {
  width: 1080,
  height: 108,
}

addPropertyControls(HeaderNavigation, {
  logo: {
    type: ControlType.ComponentInstance,
  },
  items: {
    title: "Items",
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        text: { type: ControlType.String },
        highlight: { type: ControlType.Boolean },
      },
    },
  },
})
