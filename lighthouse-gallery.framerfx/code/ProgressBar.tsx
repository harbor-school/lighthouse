import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerProgressBar = (props) => {
  return <System.ProgressBar {...props}></System.ProgressBar>
}

export const ProgressBar = withHOC(InnerProgressBar)

ProgressBar.defaultProps = {
  width: 150,
  height: 12,
  ...System.ProgressBar.defaultProps,
}

addPropertyControls(ProgressBar, {
  value: {
    title: "Value",
    type: ControlType.Number,
  },
  infinite: {
    title: "Infinite",
    type: ControlType.Boolean,
  },
})
