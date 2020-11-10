import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerTable = (props) => {
  return <System.Table {...props}></System.Table>
}

export const Table = withHOC(InnerTable)

Table.defaultProps = {
  width: 350,
  height: 212,
  ...System.Table.defaultProps,
}

addPropertyControls(Table, {
  headerCells: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
      defaultValue: "Name",
    },
  },
  columnRatio: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.Number,
      displayStepper: true,
      defaultValue: 1,
    },
  },
})
