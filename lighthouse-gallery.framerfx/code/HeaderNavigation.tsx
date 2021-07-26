import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import * as System from "../../../lighthouse"
import { withHOC } from "./utils/withHOC"

const defaultValue = [
  { text: "Menu 0", href: "https://harbor.school/en", target: "_blank", highlight: false },
  { text: "Menu 1", href: "https://harbor.school/en", target: "_blank", highlight: false },
  { text: "Menu 2", href: "https://harbor.school/en", target: "_blank", highlight: true },
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
            <System.StyledLink
              // @ts-ignore
              dangerouslySetInnerHTML={{ __html: item.text }}
              href={item.href}
              // @ts-ignore
              target={item.target}
              highlight={item.highlight}
            />
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
        href: { type: ControlType.String },
        target: { type: ControlType.Enum, options: ["_blank", "_self", "_parent", "_top"] },
        highlight: { type: ControlType.Boolean },
      },
    },
  },
})
