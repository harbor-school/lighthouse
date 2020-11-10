import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"
import { useTheme } from "../../../lighthouse"
import { placeholderState } from "./utils/placeholderState"

const InnerSelect = (props) => {
  const theme = useTheme()
  const options = props.options.map((option) => ({
    label: option.label || option,
    key: option.key || option,
    ...option,
  }))
  if (!options.length && !options.length) {
    return React.createElement(placeholderState, {
      title: "Add Options",
      label: "Options could be added from the right Control panel.",
    })
  }
  return <System.Select {...props} options={options} theme={theme}></System.Select>
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = {
  width: 300,
  height: 132,
  ...System.Select.defaultProps,
}

addPropertyControls(Select, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
  },
  options: {
    title: "Options",
    type: ControlType.Array,
    defaultValue: System.Select.defaultProps.options.map((option) => option.label),
    propertyControl: {
      type: ControlType.String,
      defaultValue: "Option Label",
    },
  },
  isOpen: {
    title: "Is open",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  active: {
    title: "Active",
    type: ControlType.Number,
  },
  animate: {
    title: "Animate",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
