import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import * as System from "../../../lighthouse"
import { useTheme } from "../../../lighthouse"
import { withHOC } from "./utils/withHOC"

const defaultValue = ["Home", "Shop", "Cart"]

const InnerBreadcrumbs = ({ content = defaultValue, ...rest }) => {
  const theme = useTheme()
  return (
    <System.Breadcrumbs {...rest}>
      {content.map((content, id) => (
        <System.ParagraphLarge key={id} padding={`0px ${theme.sizing.scale700}`}>
          {content}
        </System.ParagraphLarge>
      ))}
    </System.Breadcrumbs>
  )
}

export const Breadcrumbs = withHOC(InnerBreadcrumbs)

Breadcrumbs.defaultProps = {
  width: 272,
  height: 28,
}

addPropertyControls(Breadcrumbs, {
  content: {
    title: "Children",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
      displayTextArea: true,
    },
    defaultValue,
  },
})
