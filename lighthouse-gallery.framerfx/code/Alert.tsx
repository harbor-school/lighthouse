import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls, Frame } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerAlert = (props) => {
  const { body, ...rest } = props
  return (
    <Frame center background="">
      <System.Alert
        body={body.length > 0 && <div className="alert-body-wrap">{body}</div>}
        {...rest}
      ></System.Alert>
    </Frame>
  )
}

export const Alert = withHOC(InnerAlert)

Alert.defaultProps = {
  width: 450,
  height: 240,
  body: [],
  ...System.Alert.defaultProps,
}

addPropertyControls(Alert, {
  show: {
    title: "Show",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    options: ["positive", "negative"],
    optionTitles: ["positive", "negative"],
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Hello",
  },
  body: {
    title: "Body",
    type: ControlType.ComponentInstance,
  },
  message: {
    title: "Message",
    type: ControlType.String,
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo quam, faucibus sit amet euismod vitae, pretium et erat.",
  },
})
