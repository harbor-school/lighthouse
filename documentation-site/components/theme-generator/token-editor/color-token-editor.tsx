import * as React from "react"
import { useRecoilValue } from "recoil"
import * as System from "../../../../../lighthouse"
import { useTheme } from "../../../../../lighthouse"
import { themeEditorState } from "../../../store"
import { isHex, getColorfromString } from "../../../utils"
import { ColorSelect } from "./color-select"
import { TokenEditor } from "./token-editor"

export function ColorTokenEditor({ colorTokenKind }) {
  const theme = useTheme()
  const themeEditor = useRecoilValue(themeEditorState)

  return (
    <TokenEditor
      type="colors"
      colorTokenKind={colorTokenKind}
      columnRatio={[8, 8, 3, 6]}
      headerCells={["Name", "Color"]}
      SelectCell={ColorSelect}
      PreviewBlock={(tableData, key) => (
        <System.Block
          width={theme.sizing.scale400}
          height={theme.sizing.scale400}
          backgroundColor={
            isHex(tableData[key]) ? tableData[key] : getColorfromString(tableData[key], themeEditor)
          }
        />
      )}
      newRow="Select a Color"
    />
  )
}

ColorTokenEditor.defaultProps = {}
