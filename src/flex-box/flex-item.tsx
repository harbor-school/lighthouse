import * as React from "react"
import * as System from "../lighthouse"
import { FlexItemPropsT } from "./types"

export const FlexItem: React.FC<FlexItemPropsT> = ({
  $id = 0,
  children,
  $columnGap = "0px",
  $rowGap,
  $widthRatio = [],
  noShrink = false,
  ...props
}) => {
  const paddingProps = {
    paddingLeft: `calc(${$columnGap} / 2)`,
    paddingRight: `calc(${$columnGap} / 2)`,
    paddingTop: `calc(${$rowGap} / 2)`,
    paddingBottom: `calc(${$rowGap} / 2)`,
  }

  return (
    <System.Block
      minWidth="0px"
      {...paddingProps}
      {...getWidthProp({ $id, $columnGap, $widthRatio })}
      {...props}
      overrides={{ Block: { flexShrink: noShrink ? 0 : "initial", ...props.overrides?.Block } }}
    >
      {children}
    </System.Block>
  )
}

FlexItem.defaultProps = {}

function getWidthProp({ $id, $columnGap, $widthRatio }) {
  if ($widthRatio.length) {
    return {
      width: `calc((100% - ${$columnGap} * ${$widthRatio.length - 1})
      * ${$widthRatio[$id]} + ${$columnGap})`,
    }
  }
}
