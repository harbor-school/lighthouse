import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls, Frame } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerModal = (props) => {
  return (
    <Frame center background="" size="100%">
      <System.Modal
        {...props}
        loadingSpinner={<div className="modal-loading-wrap">{props.loadingSpinner}</div>}
      >
        {props.content && <div className="modal-children-wrap">{props.content}</div>}
      </System.Modal>
    </Frame>
  )
}

export const Modal = withHOC(InnerModal)

Modal.defaultProps = {
  width: 450,
  height: 290,
  ...System.Modal.defaultProps,
}

addPropertyControls(Modal, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title",
  },
  desc: {
    title: "Desc",
    type: ControlType.String,
  },
  confirmText: {
    title: "Confirm text",
    type: ControlType.String,
    defaultValue: "confirmText",
  },
  cancelText: {
    title: "Cancel text",
    type: ControlType.String,
    defaultValue: "cancelText",
  },
  closeOnClick: {
    type: ControlType.EventHandler,
  },
  confirmOnClick: {
    type: ControlType.EventHandler,
  },
  onSubmit: {
    type: ControlType.EventHandler,
  },
  loading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  loadingSpinner: {
    title: "Loading spinner",
    type: ControlType.ComponentInstance,
    hidden(props) {
      return props.loading === false
    },
  },
  content: {
    title: "Children",
    type: ControlType.ComponentInstance,
    hidden(props) {
      return props.loading === true
    },
  },
  isOpen: {
    title: "Is open",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  role: {
    title: "Role",
    type: ControlType.Enum,
    options: ["dialog", "form"],
    optionTitles: ["dialog", "form"],
  },
})
