import * as React from "react"
import * as System from "../lighthouse"
import { FlexBoxPropsT } from "./types"

export const FlexBox: React.FC<FlexBoxPropsT> = ({
  columnGap,
  rowGap,
  columnRatio = [],
  children,
  ...props
}) => {
  const theme: System.ThemeT = React.useContext(System.ThemeContext)
  const getScale = (size) => theme.sizing[size] || size
  const columnGapScale = getScale(columnGap)
  const rowGapScale = getScale(rowGap)
  const marginProps = React.Children.toArray(children).length > 1 && {
    marginLeft: `calc(-${columnGapScale} / 2)`,
    marginRight: `calc(-${columnGapScale} / 2)`,
    marginTop: `calc(-${rowGapScale} / 2)`,
    marginBottom: `calc(-${rowGapScale} / 2)`,
  }
  const gapProps = {
    $columnGap: columnGapScale,
    $rowGap: rowGapScale,
    $widthRatio: getWidthRatio({ $columnRatio: columnRatio }),
  }

  return (
    <System.Block display="flex" {...marginProps} {...props}>
      {Array.isArray(children) &&
        children.map((child, id) => {
          if (React.isValidElement(child))
            return React.cloneElement(child, {
              ...gapProps,
              key: id,
              $id: id,
            })
        })}
      {!Array.isArray(children) &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          ...gapProps,
        })}
    </System.Block>
  )
}

FlexBox.defaultProps = {}

function getWidthRatio({ $columnRatio }) {
  let ratioSum = 0
  for (let i = 0; i < $columnRatio.length; i++) ratioSum += $columnRatio[i]
  return $columnRatio.map((ratio) => ratio / ratioSum)
}
