import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerSpinner = (props) => {
  return <System.Spinner {...props}></System.Spinner>
}

export const Spinner = withHOC(InnerSpinner)

Spinner.defaultProps = {
  width: 48,
  height: 48,
}

addPropertyControls(Spinner, {})
