import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import * as System from "../../../lighthouse"
import { withHOC } from "./utils/withHOC"

const InnerIcon = ({
  content,
  children, // extract children on Framer Canvas to remove error
  ...rest
}) => {
  // @ts-ignore
  return <System.Icon dangerouslySetInnerHTML={{ __html: content }} {...rest}></System.Icon>
}

export const Icon = withHOC(InnerIcon)

Icon.defaultProps = {
  width: 98,
  height: 98,
}

addPropertyControls(Icon, {
  width: {
    title: "Width",
    type: ControlType.Number,
    unit: "px",
    defaultValue: 98,
    displayStepper: true,
  },
  height: {
    title: "Height",
    type: ControlType.Number,
    unit: "px",
    defaultValue: 98,
    displayStepper: true,
  },
  viewBox: {
    title: "View box",
    type: ControlType.String,
    defaultValue: "0 0 98 98",
  },
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["center", "left", "right"],
    optionTitles: ["center", "left", "right"],
  },
  fill: {
    title: "Fill",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  color: {
    title: "Fill Color",
    type: ControlType.Color,
    defaultValue: "#005AFA",
    hidden(props) {
      return props.fill == false
    },
  },
  content: {
    title: "Children",
    type: ControlType.String,
    displayTextArea: true,
    defaultValue: `<path d="M98 0H0V98L98 0Z" fill="#005AFA" />
    <path d="M0 98L98 0V98H0Z" fill="#E8E8E8" />`,
  },
})
