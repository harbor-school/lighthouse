import * as React from "react"
import { ControlType, addPropertyControls } from "framer"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { withHOC } from "../utils/withHOC"

export function InnerBoxTitle({ title }) {
  const theme = useTheme()

  return (
    <System.Block
      backgroundColor="backgroundSecondary"
      paddingTop="scale600"
      paddingRight="scale1200"
      paddingBottom="scale600"
      paddingLeft="scale1200"
      overrides={{
        Block: {
          boxShadow: `0px 0px 0px 1000px ${theme.colors.backgroundPrimary}`,
        },
      }}
    >
      <System.HeadingXSmall>{title}</System.HeadingXSmall>
    </System.Block>
  )
}

export const BoxTitle = withHOC(InnerBoxTitle)

BoxTitle.defaultProps = {
  width: 600,
  height: 60,
}

addPropertyControls(BoxTitle, {
  title: {
    type: ControlType.String,
    defaultValue: "Box Title",
  },
})
