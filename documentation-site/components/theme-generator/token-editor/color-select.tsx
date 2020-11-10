import * as React from "react"
import { useEffect, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import * as System from "../../../../../lighthouse"
import { selectState, themeEditorState } from "../../../store"
import { ColorPicker } from "./color-picker"
import { KIND } from "../constants"
import { editThemeTableRow } from "./handler"

export function ColorSelect({ type, colorTokenKind, rowKey, tableData, setTableData }) {
  const placeholder = tableData[rowKey]
  const setSelect = useSetRecoilState(selectState)
  const [themeEditor, setThemeEditor] = useRecoilState(themeEditorState)
  const [open, setOpen] = useState(false)
  const [currentStage, setCurrentStage] = useState("stage1")
  const [colorPickerOpen, setColorPickerOpen] = useState(false)
  const [colorPickerValue, setColorPickerValue] = useState(placeholder)
  const colorPicker = (
    <ColorPicker value={colorPickerValue} onChange={(e) => setColorPickerValue(e.target.value)} />
  )
  const [stageProps, setStageProps] = useState({
    stage1: {
      options: getStage1KindOptions({
        $colorTokenKind: colorTokenKind,
        $colorPicker: colorPicker,
      }),
    },
    stage2: {
      options: [],
    },
  })
  // show and hide overlay
  useEffect(() => setSelect(open), [open])

  return (
    <>
      <System.Select
        options={stageProps[currentStage].options}
        placeholder={placeholder}
        onChange={(value) => {
          const newStageProps = stageProps
          const selected = newStageProps[currentStage].options[value].label
          console.log("selected", selected)
          if (hasStage2(selected)) {
            if (currentStage === "stage1") {
              // go & assign stage2 options as states
              setCurrentStage("stage2")
              newStageProps["stage2"].options = getStage2KindOptions({
                $pickerKind: selected,
                $themeEditor: themeEditor,
              })
              setStageProps({ ...newStageProps })
            } else if (currentStage === "stage2") {
              editThemeTableRow({
                type,
                key: rowKey,
                value: selected,
                tableData,
                setTableData,
                colorTokenKind,
                themeEditor,
                setThemeEditor,
              })
              // reset
              closeSelect({ setOpen, setCurrentStage })
            }
          } else setColorPickerOpen(true) // handle ColorPicker (no stage2)
        }}
        onClick={() => setOpen(true)}
        onClickOutside={() => {
          if (colorPickerOpen) {
            console.log("onClickOutside! - colorPickerOpen")
            editThemeTableRow({
              type,
              key: rowKey,
              value: colorPickerValue,
              tableData,
              setTableData,
              colorTokenKind,
              themeEditor,
              setThemeEditor,
            })
            // refresh colorPicker with new state (value)
            const newStageProps = stageProps
            newStageProps[currentStage].options[0].label = colorPicker
            setStageProps({ ...newStageProps })
          }
          // reset
          closeSelect({ setOpen, setCurrentStage })
          setColorPickerOpen(false)
        }}
        isOpen={open}
        overrides={{
          OptionList: {
            maxHeight: "300px",
            overflowY: "scroll",
          },
        }}
      />
    </>
  )
}
function getStage1KindOptions({ $colorTokenKind, $colorPicker }) {
  switch ($colorTokenKind) {
    case KIND.colorScale:
      return [
        {
          label: $colorPicker,
        },
      ]
    case KIND.newColorSemantic:
      return [
        {
          label: $colorPicker,
        },
        {
          label: "colorScale",
        },
        {
          label: "colorFoundation",
        },
      ]
    case KIND.colorFoundation:
      return [
        {
          label: "colorScale",
        },
      ]
    case KIND.colorSemantic:
      return [
        {
          label: "colorScale",
        },
        {
          label: "colorFoundation",
        },
      ]

    default:
      return []
  }
}

function getStage2KindOptions({ $pickerKind, $themeEditor }) {
  return Object.keys($themeEditor.colors[$pickerKind]).map((key, id) => {
    let prefix = ""
    if ($pickerKind === KIND.colorScale) prefix = "colors"
    else if ($pickerKind === KIND.colorFoundation) prefix = "foundation"
    return {
      label: `${prefix}.${key}`,
    }
  })
}

function hasStage2(selected) {
  return (
    selected === "colorScale" ||
    selected === "colorFoundation" ||
    (typeof selected === "string" &&
      (selected.includes("colors") || selected.includes("foundation")))
  )
}

function closeSelect({ setOpen, setCurrentStage }) {
  setOpen(false)
  setCurrentStage("stage1")
}
