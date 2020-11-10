import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerRadio = (props) => {
  return <System.Radio {...props}></System.Radio>
}

export const Radio = withHOC(InnerRadio)

Radio.defaultProps = {
  width: 63,
  height: 20,
}

addPropertyControls(Radio, {
  hasForm: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "label",
  },
  value: {
    title: "Value",
    type: ControlType.String,
  },
  checked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: false,
    hidden(props) {
      return props.hasForm === true
    },
  },
  name: {
    title: "Name",
    type: ControlType.String,
    hidden(props) {
      return props.hasForm === false
    },
  },
  required: {
    title: "Required",
    type: ControlType.Boolean,
    defaultValue: false,
    hidden(props) {
      return props.hasForm === false
    },
  },
})
