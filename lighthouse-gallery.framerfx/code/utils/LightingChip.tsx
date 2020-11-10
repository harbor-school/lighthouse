import * as React from "react"
import * as System from "../../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLightingChip = (props) => {
  return <System.LightingChip {...props}></System.LightingChip>
}

export const LightingChip = withHOC(InnerLightingChip)

LightingChip.defaultProps = {
  width: 290,
  height: 92,
}

addPropertyControls(LightingChip, {
  lighting: {
    title: "Lighting",
    type: ControlType.Enum,
    options: [
      "shadow400",
      "shadow500",
      "shadow600",
      "shadow700",
      "overlay0",
      "overlay100",
      "overlay200",
      "overlay300",
      "overlay400",
      "overlay500",
      "overlay600",
    ],
    optionTitles: [
      "shadow400",
      "shadow500",
      "shadow600",
      "shadow700",
      "overlay0",
      "overlay100",
      "overlay200",
      "overlay300",
      "overlay400",
      "overlay500",
      "overlay600",
    ],
  },
})
