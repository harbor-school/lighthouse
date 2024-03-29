import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import * as System from "../lighthouse"
import { LightingChipPropsT } from "./types"

export const LightingChip: React.FC<LightingChipPropsT> = ({ showInfo, lighting }) => {
  const theme = useContext(ThemeContext)
  const boxShadow = getLighting({
    $theme: theme,
    $lighting: lighting,
  })

  return (
    <>
      <System.Block
        height={showInfo ? "scale900" : "100%"}
        backgroundColor={showInfo ? "backgroundSecondary" : "transparent"}
        overrides={{
          Block: {
            boxShadow,
          },
        }}
      />
      {showInfo && (
        <System.Block padding={theme.sizing.scale400}>
          <System.LabelMedium>{lighting}</System.LabelMedium>
          <System.Spacing height="scale100" />
          <System.LabelSmall
            overrides={{
              Block: {
                textTransform: "lowercase",
                color: theme.colors.contentInverseTertiary,
              },
            }}
          >
            {boxShadow}
          </System.LabelSmall>
        </System.Block>
      )}
    </>
  )
}

LightingChip.defaultProps = {
  showInfo: false,
  lighting: "shadow500",
}

function getLighting({ $theme, $lighting }) {
  return $theme.lighting[$lighting]
}
