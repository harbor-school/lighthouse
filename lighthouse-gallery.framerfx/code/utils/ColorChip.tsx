import * as React from "react"
import * as System from "../../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerColorChip = (props) => {
  return <System.ColorChip {...props}></System.ColorChip>
}

export const ColorChip = withHOC(InnerColorChip)

ColorChip.defaultProps = {
  width: 180,
  height: 112,
}

addPropertyControls(ColorChip, {
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    options: ["scale", "foundation", "semantic"],
    optionTitles: ["scale", "foundation", "semantic"],
  },
  colorScale: {
    title: "Color scale",
    type: ControlType.Enum,
    options: [
      "white",
      "black",
      "gray50",
      "gray100",
      "gray200",
      "gray300",
      "gray400",
      "gray500",
      "gray600",
      "gray700",
      "gray800",
      "gray900",
      "gray1000",
      "red50",
      "red100",
      "red200",
      "red300",
      "red400",
      "red500",
      "red600",
      "red700",
      "red800",
      "red900",
      "red1000",
      "green50",
      "green100",
      "green200",
      "green300",
      "green400",
      "green500",
      "green600",
      "green700",
      "green800",
      "green900",
      "green1000",
      "blue50",
      "blue100",
      "blue200",
      "blue300",
      "blue400",
      "blue500",
      "blue600",
      "blue700",
      "blue800",
      "blue900",
      "blue1000",
      "yellow50",
      "yellow100",
      "yellow200",
      "yellow300",
      "yellow400",
      "yellow500",
      "yellow600",
      "yellow700",
    ],
    optionTitles: [
      "white",
      "black",
      "gray50",
      "gray100",
      "gray200",
      "gray300",
      "gray400",
      "gray500",
      "gray600",
      "gray700",
      "gray800",
      "gray900",
      "gray1000",
      "red50",
      "red100",
      "red200",
      "red300",
      "red400",
      "red500",
      "red600",
      "red700",
      "red800",
      "red900",
      "red1000",
      "green50",
      "green100",
      "green200",
      "green300",
      "green400",
      "green500",
      "green600",
      "green700",
      "green800",
      "green900",
      "green1000",
      "blue50",
      "blue100",
      "blue200",
      "blue300",
      "blue400",
      "blue500",
      "blue600",
      "blue700",
      "blue800",
      "blue900",
      "blue1000",
      "yellow50",
      "yellow100",
      "yellow200",
      "yellow300",
      "yellow400",
      "yellow500",
      "yellow600",
      "yellow700",
    ],
    hidden(props) {
      return props.kind !== "scale"
    },
  },
  colorFoundation: {
    title: "Color foundation",
    type: ControlType.Enum,
    options: [
      "primaryA",
      "primaryB",
      "primary",
      "primary50",
      "primary100",
      "primary200",
      "primary300",
      "primary400",
      "primary500",
      "primary600",
      "primary700",
      "negative",
      "negative50",
      "negative100",
      "negative200",
      "negative300",
      "negative400",
      "negative500",
      "negative600",
      "negative700",
      "warning",
      "warning50",
      "warning100",
      "warning200",
      "warning300",
      "warning400",
      "warning500",
      "warning600",
      "warning700",
      "positive",
      "positive50",
      "positive100",
      "positive200",
      "positive300",
      "positive400",
      "positive500",
      "positive600",
      "positive700",
      "white",
      "black",
      "mono100",
      "mono200",
      "mono300",
      "mono400",
      "mono500",
      "mono600",
      "mono700",
      "mono800",
      "mono900",
      "mono1000",
    ],
    optionTitles: [
      "primaryA",
      "primaryB",
      "primary",
      "primary50",
      "primary100",
      "primary200",
      "primary300",
      "primary400",
      "primary500",
      "primary600",
      "primary700",
      "negative",
      "negative50",
      "negative100",
      "negative200",
      "negative300",
      "negative400",
      "negative500",
      "negative600",
      "negative700",
      "warning",
      "warning50",
      "warning100",
      "warning200",
      "warning300",
      "warning400",
      "warning500",
      "warning600",
      "warning700",
      "positive",
      "positive50",
      "positive100",
      "positive200",
      "positive300",
      "positive400",
      "positive500",
      "positive600",
      "positive700",
      "white",
      "black",
      "mono100",
      "mono200",
      "mono300",
      "mono400",
      "mono500",
      "mono600",
      "mono700",
      "mono800",
      "mono900",
      "mono1000",
    ],
    hidden(props) {
      return props.kind !== "foundation"
    },
  },
  colorSemantic: {
    title: "Color sementic",
    type: ControlType.Enum,
    options: [
      "backgroundPrimary",
      "backgroundSecondary",
      "backgroundTertiary",
      "backgroundInversePrimary",
      "backgroundInverseSecondary",
      "contentPrimary",
      "contentSecondary",
      "contentTertiary",
      "contentInversePrimary",
      "contentInverseSecondary",
      "contentInverseTertiary",
      "borderOpaque",
      "borderTransparent",
      "borderSelected",
      "borderInverseOpaque",
      "borderInverseTransparent",
      "borderInverseSelected",
    ],
    optionTitles: [
      "background Primary",
      "background Secondary",
      "background Tertiary",
      "background Inverse Primary",
      "background Inverse Secondary",
      "content Primary",
      "content Secondary",
      "content Tertiary",
      "content Inverse Primary",
      "content Inverse Secondary",
      "content Inverse Tertiary",
      "border Opaque",
      "border Transparent",
      "border Selected",
      "border Inverse Opaque",
      "border Inverse Transparent",
      "border Inverse Selected",
    ],
    hidden(props) {
      return props.kind !== "semantic"
    },
  },
})
