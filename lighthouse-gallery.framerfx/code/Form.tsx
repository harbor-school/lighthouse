import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"
import { placeholderState } from "./utils/placeholderState"

const InnerForm = (props) => {
  const { formBody, formFooter, ...rest } = props
  if (!formBody.length && !formFooter.length) {
    return React.createElement(placeholderState, {
      title: "Add Contents",
      label: "Add formBody or formFooter Frame.",
    })
  }

  return (
    <System.Form
      formBody={formBody.map((child, id) => (
        <div className="form-body-wrap" key={id}>
          {child}
        </div>
      ))}
      formFooter={<div className="form-footer-wrap">{formFooter}</div>}
      {...rest}
    ></System.Form>
  )
}

export const Form = withHOC(InnerForm)

Form.defaultProps = {
  width: 280,
  height: 160,
}

addPropertyControls(Form, {
  formBody: {
    title: "Form body",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
  },
  formFooter: {
    title: "Form footer",
    type: ControlType.ComponentInstance,
  },
  rowGap: {
    title: "Row gap",
    type: ControlType.Enum,
    options: [
      "scale0",
      "scale100",
      "scale200",
      "scale300",
      "scale400",
      "scale500",
      "scale550",
      "scale600",
      "scale650",
      "scale700",
      "scale750",
      "scale800",
      "scale900",
      "scale1000",
      "scale1200",
      "scale1400",
      "scale1600",
      "scale2400",
      "scale3200",
      "scale4800",
    ],
    optionTitles: [
      "scale0",
      "scale100",
      "scale200",
      "scale300",
      "scale400",
      "scale500",
      "scale550",
      "scale600",
      "scale650",
      "scale700",
      "scale750",
      "scale800",
      "scale900",
      "scale1000",
      "scale1200",
      "scale1400",
      "scale1600",
      "scale2400",
      "scale3200",
      "scale4800",
    ],
  },
})
