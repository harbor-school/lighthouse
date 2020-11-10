import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerCard = (props) => {
  return (
    <System.Card {...props}>
      {props.defaultStyle && (
        <>
          <System.CardBody>{props.body}</System.CardBody>
          <System.CardAction>
            <System.Button>{props.actionButtonText}</System.Button>
          </System.CardAction>
        </>
      )}

      {!props.defaultStyle && <div className="card-children-wrap">{props.content}</div>}
    </System.Card>
  )
}

export const Card = withHOC(InnerCard)

Card.defaultProps = {
  width: 340,
  height: 256,
}

addPropertyControls(Card, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title",
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "label",
  },
  defaultStyle: {
    type: ControlType.Boolean,
  },
  body: {
    title: "Body",
    type: ControlType.String,
    defaultValue: "Body",
    hidden(props) {
      return props.defaultStyle === false
    },
  },
  actionButtonText: {
    type: ControlType.String,
    defaultValue: "Button Label",
    hidden(props) {
      return props.defaultStyle === false
    },
  },
  content: {
    title: "Children",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
    hidden(props) {
      return props.defaultStyle === true
    },
  },
})
