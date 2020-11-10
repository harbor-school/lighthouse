import * as React from "react"
import { IconPropsT } from "./types"
import { ALIGN } from "./constants"

export const Icon: React.FC<IconPropsT> = ({ width, height, color, align, children, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      style={{
        display: "block",
        ...getAlignStyles({ $align: align }),
      }}
      {...rest}
    >
      {children}
    </svg>
  )
}

function getAlignStyles({ $align }) {
  switch ($align) {
    case ALIGN.center:
      return {
        margin: "0 auto",
      }
    case ALIGN.right:
      return {
        marginLeft: "auto",
      }
    default:
      return Object.freeze({})
  }
}

Icon.defaultProps = {
  align: "center",
}
