import * as React from "react"
import { Icon } from "./icon"
import { IconPropsT } from "./types"

export const Lock: React.FC<IconPropsT> = ({ width, height, color, align, ...rest }) => {
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 24 24",
  }
  return (
    <Icon {...iconProps}>
      <path
        d="M 5 22 C 3.895 22 3 21.105 3 20 L 3 13 C 3 11.895 3.895 11 5 11 L 19 11 C 20.105 11 21 11.895 21 13 L 21 20 C 21 21.105 20.105 22 19 22 Z"
        fill="transparent"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 7 11 L 7 7 C 7 4.239 9.239 2 12 2 C 14.761 2 17 4.239 17 7 L 17 11"
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

Lock.defaultProps = {
  color: "black",
}
