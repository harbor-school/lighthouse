import * as React from "react"
import { Icon } from "./icon"
import { IconPropsT } from "./types"

export const Arrow: React.FC<IconPropsT> = ({ width, height, color, align, ...rest }) => {
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
  }
  return (
    <Icon {...iconProps}>
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </Icon>
  )
}

Arrow.defaultProps = {
  color: "black",
}
