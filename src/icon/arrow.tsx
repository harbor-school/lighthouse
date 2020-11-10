import * as React from "react"
import { Icon } from "./icon"
import { IconPropsT } from "./types"

export const Arrow: React.FC<IconPropsT> = ({ width, height, color, align, ...rest }) => {
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 9 9",
  }
  return (
    <Icon {...iconProps}>
      <path
        d="M 8.248 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 C 0 1.164 0.336 1.5 0.75 1.5 L 6.438 1.5 L 0.22 7.72 C -0.055 8.016 -0.047 8.476 0.238 8.762 C 0.524 9.047 0.984 9.055 1.28 8.78 L 7.5 2.56 L 7.5 8.25 C 7.5 8.664 7.836 9 8.25 9 C 8.664 9 9 8.664 9 8.25 L 9 0.75 C 9 0.551 8.921 0.36 8.78 0.22 L 8.777 0.218 C 8.637 0.078 8.448 0 8.25 0 Z"
        fill={color}
      ></path>
    </Icon>
  )
}

Arrow.defaultProps = {
  color: "black",
}
