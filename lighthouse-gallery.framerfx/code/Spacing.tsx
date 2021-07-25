import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"

const InnerSpacing = (props) => {
  return (
    <System.Spacing
      {...props}
      width={props.widthAmount}
      height={props.heightAmount}
      backgroundColor={"var(--lh-guide-spacing)"}
    ></System.Spacing>
  )
}

export const Spacing = withHOC(InnerSpacing)

Spacing.defaultProps = {
  // Control width / height (the purple border area)
  width: 150,
  height: 20,
  // show guide and control with CSS Variables in Framer
  guide: true,
}

// Component width / height (the green border area)
addPropertyControls(Spacing, {
  widthAmount: {
    title: "Width",
    type: ControlType.Enum,
    options: [
      "100%",
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
      "100%",
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
    defaultValue: "100%",
  },
  heightAmount: {
    title: "Height",
    type: ControlType.Enum,
    options: [
      "100%",
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
      "100%",
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
    defaultValue: "scale700",
  },
  guide: {
    title: "Guide",
    type: ControlType.Boolean,
  },
})
