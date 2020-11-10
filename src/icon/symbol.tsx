import * as React from "react"
import { Icon } from "./icon"
import { IconPropsT } from "./types"

export const Symbol: React.FC<IconPropsT> = ({ width, height, color, align, ...rest }) => {
  const iconProps = {
    width,
    height,
    align,
    viewBox: "0 0 98 98",
  }
  return (
    <Icon {...iconProps}>
      <path d="M98 0H0V98L98 0Z" fill="#005AFA" />
      <path d="M0 98L98 0V98H0Z" fill="#E8E8E8" />
    </Icon>
  )
}

Symbol.defaultProps = {
  color: "black",
}
