import * as React from "react"
import { useEffect, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import * as System from "../../../../../lighthouse"
import { selectState, themeEditorState } from "../../../store"
import { ShadowPicker } from "./shadow-picker"
import { editThemeTableRow } from "./handler"

export function ShadowSelect({ type, colorTokenKind, rowKey, tableData, setTableData }) {
  const placeholder = tableData[rowKey]
  const setSelect = useSetRecoilState(selectState)
  const [themeEditor, setThemeEditor] = useRecoilState(themeEditorState)
  const [open, setOpen] = useState(false)
  const [shadowPickerOpen, setShadowPickerOpen] = useState(false)
  const [shadow, setShadow] = useState(placeholder)
  // show and hide overlay
  useEffect(() => setSelect(open), [open])

  return (
    <>
      <System.Select
        options={[
          { label: <ShadowPicker placeholder={shadow} onChange={(value) => setShadow(value)} /> },
        ]}
        placeholder={placeholder}
        onChange={(value) => setShadowPickerOpen(true)} // handle ShadowPicker
        onClick={() => setOpen(true)}
        onClickOutside={() => {
          if (shadowPickerOpen) {
            console.log("onClickOutside! - shadowPickerOpen")
            editThemeTableRow({
              type,
              key: rowKey,
              value: shadow,
              tableData,
              setTableData,
              colorTokenKind,
              themeEditor,
              setThemeEditor,
            })
          }
          // reset
          setOpen(false)
          setShadowPickerOpen(false)
        }}
        isOpen={open}
        overrides={{
          OptionList: {
            width: "256px",
          },
          Option: {
            padding: "0px",
          },
        }}
      />
    </>
  )
}
