import * as React from "react"
import { Icon } from "./icon"
import { IconPropsT } from "./types"

export const ExternalLink: React.FC<IconPropsT> = ({ width, height, color, align, ...rest }) => {
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 24 24",
  }
  return (
    <Icon {...iconProps}>
      <path
        d="M 18 13 L 18 19 C 18 20.105 17.105 21 16 21 L 5 21 C 3.895 21 3 20.105 3 19 L 3 8 C 3 6.895 3.895 6 5 6 L 11 6 M 15 3 L 21 3 L 21 9 M 10 14 L 21 3"
        fill="transparent"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </Icon>
  )
}

ExternalLink.defaultProps = {
  color: "black",
}
