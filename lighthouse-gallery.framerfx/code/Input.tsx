import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerInput = (props) => {
  return <System.Input {...props}></System.Input>
}

export const Input = withHOC(InnerInput)

Input.defaultProps = {
  width: 300,
  height: 93,
  ...System.Input.defaultProps,
}

addPropertyControls(Input, {
  label: {
    title: "Label",
    type: ControlType.String,
  },
  caption: {
    title: "Caption",
    type: ControlType.String,
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder",
  },
  defaultValue: {
    title: "Default value",
    type: ControlType.String,
  },
  hasForm: {
    type: ControlType.Boolean,
    defaultValue: false,
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
  pattern: {
    title: "Pattern",
    type: ControlType.String,
    hidden(props) {
      return props.hasForm === false || props.required === false
    },
  },
  onFocus: {
    type: ControlType.EventHandler,
  },
  onBlur: {
    type: ControlType.EventHandler,
  },
})
