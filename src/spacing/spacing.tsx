import * as React from "react"
import * as System from "../lighthouse"
import { SpacingPropsT } from "./types"

export const Spacing: React.FC<SpacingPropsT> = ({ guide, ...props }) => (
  <System.Block {...props} position="relative">
    <System.Block
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      whiteSpace="nowrap"
      overrides={{ Block: { fontSize: "8px", opacity: 0.6 } }}
    >
      {guide && (
        <>
          {/* @ts-ignore */}
          {props?.width !== "100%" && `${props.width}`}
          {/* @ts-ignore */}
          {props?.width !== "100%" && props?.height !== "100%" && ` / `}
          {/* @ts-ignore */}
          {props?.height !== "100%" && `${props.height}`}
        </>
      )}
    </System.Block>
  </System.Block>
)

Spacing.defaultProps = {
  guide: false,
}
