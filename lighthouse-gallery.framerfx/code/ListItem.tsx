import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerListItem = ({ overrides, ...props }) => {
  return (
    <System.ListItem
      {...props}
      overrides={{
        ...overrides,
        Wrap: {
          height: "100%",
          ...overrides.Wrap,
        },
      }}
    >
      {props.defaultStyle && (
        <System.ListItemLabel>
          {props.title && <System.LabelMedium>{props.title}</System.LabelMedium>}
          {props.description && (
            <System.ParagraphXSmall>{props.description}</System.ParagraphXSmall>
          )}
        </System.ListItemLabel>
      )}
      {!props.defaultStyle && <div className="list-item-children-wrap">{props.content}</div>}
    </System.ListItem>
  )
}

export const ListItem = withHOC(InnerListItem)

ListItem.defaultProps = {
  width: 150,
  height: 72,
}

addPropertyControls(ListItem, {
  title: {
    type: ControlType.String,
    defaultValue: "Title",
    hidden(props) {
      return props.defaultStyle === false
    },
  },
  description: {
    type: ControlType.String,
    defaultValue: "Description",
    hidden(props) {
      return props.defaultStyle === false
    },
  },
  endEnhancer: {
    title: "End enhancer",
    type: ControlType.String,
  },
  defaultStyle: {
    type: ControlType.Boolean,
  },
  content: {
    title: "Children",
    type: ControlType.ComponentInstance,
    hidden(props) {
      return props.defaultStyle === true
    },
  },
})
