import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerToast = (props) => {
  return <System.Toast {...props}></System.Toast>
}

export const Toast = withHOC(InnerToast)

Toast.defaultProps = {
  width: 470,
  height: 48,
  ...System.Toast.defaultProps,
}

addPropertyControls(Toast, {
  show: {
    title: "Show",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    options: ["primary", "secondary"],
    optionTitles: ["primary", "secondary"],
  },
  message: {
    title: "Message",
    type: ControlType.String,
  },
  buttonText: {
    title: "Button text",
    type: ControlType.String,
  },
})
