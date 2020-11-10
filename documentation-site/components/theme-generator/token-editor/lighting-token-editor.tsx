import * as React from "react"
import * as System from "../../../../../lighthouse"
import { useTheme } from "../../../../../lighthouse"
import { ShadowSelect } from "./shadow-select"
import { TokenEditor } from "./token-editor"

export function LightingTokenEditor() {
  const theme = useTheme()

  return (
    <TokenEditor
      type="lighting"
      columnRatio={[4, 12, 3, 3]}
      headerCells={["Name", "Shadow"]}
      SelectCell={ShadowSelect}
      PreviewBlock={(tableData, key) => (
        <System.Block
          width={theme.sizing.scale400}
          height={theme.sizing.scale400}
          backgroundColor={theme.colors.backgroundSecondary}
          overrides={{
            Block: {
              boxShadow: tableData[key],
              borderRadius: "100%",
            },
          }}
        />
      )}
      newRow="0px 0px 0px 0px hsla(0,0%,0%,0.2)" // default shadow value of new rows
    />
  )
}
