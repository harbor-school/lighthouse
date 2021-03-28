import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import * as System from "../lighthouse"
import { hexToHSL } from "../utils/hex-to-hsl"
import colors from "./../tokens/colors"
import { KIND } from "./constants"
import { ColorChipPropsT } from "./types"

export const ColorChip: React.FC<ColorChipPropsT> = ({
  showInfo,
  kind,
  colorScale,
  colorFoundation,
  colorSemantic,
}) => {
  const theme = useContext(ThemeContext)
  const color = getColor({
    $theme: theme,
    $kind: kind,
    $colorScale: colorScale,
    $colorFoundation: colorFoundation,
    $colorSemantic: colorSemantic,
  })

  return (
    <>
      <System.Block height={showInfo ? "scale900" : "100%"} backgroundColor={color} />
      {showInfo && (
        <System.Block padding={theme.sizing.scale400}>
          <System.LabelMedium>
            {getColorName({
              $kind: kind,
              $colorScale: colorScale,
              $colorFoundation: colorFoundation,
              $colorSemantic: colorSemantic,
            })}
          </System.LabelMedium>

          <System.Spacing height="scale100" />
          <System.LabelSmall
            overrides={{
              Block: {
                textTransform: "lowercase",
                color: theme.colors.contentInverseTertiary,
              },
            }}
          >
            {hexToHSL(color)}
          </System.LabelSmall>
          <System.Spacing height="scale100" />
          <System.LabelSmall
            overrides={{
              Block: {
                textTransform: "lowercase",
                color: theme.colors.contentInverseTertiary,
              },
            }}
          >
            {color}
          </System.LabelSmall>
        </System.Block>
      )}
    </>
  )
}

ColorChip.defaultProps = {
  showInfo: false,
  kind: KIND.scale,
  colorScale: "blue100",
  colorSemantic: "backgroundInversePrimary",
}

function getColor({ $theme, $kind, $colorScale, $colorFoundation, $colorSemantic }) {
  switch ($kind) {
    case KIND.scale:
      return colors[$colorScale]
    case KIND.foundation:
      return $theme.colors[$colorFoundation]
    case KIND.semantic:
      return $theme.colors[$colorSemantic]
  }
}

function getColorName({ $kind, $colorScale, $colorFoundation, $colorSemantic }) {
  switch ($kind) {
    case KIND.scale:
      return $colorScale
    case KIND.foundation:
      return $colorFoundation
    case KIND.semantic:
      return $colorSemantic
  }
}
