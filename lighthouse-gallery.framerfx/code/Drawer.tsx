import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"
import { placeholderState } from "./utils/placeholderState"

const InnerDrawer = (props) => {
  if (!props.children.length) {
    return React.createElement(placeholderState, {
      title: "Add Children",
      label: "Add Children Frame.",
    })
  }
  return (
    <System.Drawer {...props}>
      {props.children && <div className="modal-children-wrap">{props.children}</div>}
    </System.Drawer>
  )
}

export const Drawer = withHOC(InnerDrawer)

Drawer.defaultProps = {
  width: 414,
  height: 250,
  ...System.Drawer.defaultProps,
}

addPropertyControls(Drawer, {
  children: {
    title: "Children",
    type: ControlType.ComponentInstance,
  },
  isOpen: {
    title: "Is open",
    type: ControlType.Boolean,
  },
  placement: {
    title: "Placement",
    type: ControlType.SegmentedEnum,
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["T", "R", "B", "L"],
  },
})
