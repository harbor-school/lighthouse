import * as React from "react"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import * as System from "../../../../../lighthouse"
import { useTheme } from "../../../../../lighthouse"
import { themeEditorState } from "../../../store"
import { KIND } from "../constants"
import { deleteThemeTableRow, newThemeTableRow } from "./handler"
import { NewRowInput } from "./new-row-input"

type TokenEditorPropsT = {
  type?: "colors" | "lighting"
  colorTokenKind?: keyof typeof KIND
  columnRatio?: number[]
  headerCells?: Array<string>
  SelectCell?: React.ElementType
  PreviewBlock?: (tableData: any, key: string) => JSX.Element
  newRow?: string
}

export const TokenEditor: React.FC<TokenEditorPropsT> = ({
  type,
  colorTokenKind,
  columnRatio,
  headerCells,
  SelectCell,
  PreviewBlock,
  newRow,
}) => {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const [themeEditor, setThemeEditor] = useRecoilState(themeEditorState)
  let initial
  if (type === "colors") initial = themeEditor.colors[colorTokenKind]
  else if (type === "lighting") initial = themeEditor.lighting
  const [tableData, setTableData] = useState<any>(initial)
  // refresh tableData when themeEditor data imported
  useEffect(() => setTableData(initial), [themeEditor])

  return (
    <>
      <System.Spacing height="scale700" />
      <System.Table
        columnRatio={columnRatio}
        headerCells={headerCells}
        dataCells={Object.keys(tableData)
          .map(
            (key, id) =>
              key && [
                key === "newRow" ? (
                  <NewRowInput
                    onBlur={(e) => {
                      const firstValue = e.target.value
                      if (firstValue)
                        newThemeTableRow({
                          type,
                          newRowData: [firstValue, tableData[key]],
                          tableData,
                          setTableData,
                          colorTokenKind,
                          themeEditor,
                          setThemeEditor,
                        })
                    }}
                  />
                ) : (
                  key
                ),
                <SelectCell
                  type={type}
                  colorTokenKind={colorTokenKind}
                  rowKey={key}
                  tableData={tableData}
                  setTableData={setTableData}
                />,
                // color block
                PreviewBlock(tableData, key),
                // controls
                <System.Block // remove button
                  onClick={() =>
                    deleteThemeTableRow({
                      type,
                      key,
                      tableData,
                      setTableData,
                      colorTokenKind,
                      themeEditor,
                      setThemeEditor,
                    })
                  }
                  cursor="pointer"
                  display="inline-block"
                  color={theme.colors.contentSecondary}
                  overrides={{
                    Block: {
                      width: "100%",
                      textAlign: "right",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                >
                  remove
                </System.Block>,
              ]
          )
          .filter(function (element) {
            return element !== undefined
          })}
        overrides={{
          DataCell: {
            overflow: "initial",
            [theme.mediaQuery.medium]: {
              overflow: "hidden",
            },
          },
        }}
      />
      <System.Spacing height="scale700" />
      <System.Block // plus button
        onClick={() => {
          setTableData({
            ...tableData,
            newRow,
          })
        }}
        cursor="pointer"
        display="inline-block"
      >
        <System.Icon viewBox="0 0 24 24" width={theme.sizing.scale700} align="left">
          <path
            d="M 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 Z"
            fill={theme.colors.backgroundInverseSecondary}
          ></path>
          <path
            d="M 12 4 C 12.552 4 13 4.448 13 5 L 13 19 C 13 19.552 12.552 20 12 20 C 11.448 20 11 19.552 11 19 L 11 5 C 11 4.448 11.448 4 12 4 Z"
            fill={theme.colors.contentInversePrimary}
          ></path>
          <path
            d="M 4 12 C 4 11.448 4.448 11 5 11 L 19 11 C 19.552 11 20 11.448 20 12 C 20 12.552 19.552 13 19 13 L 5 13 C 4.448 13 4 12.552 4 12 Z"
            fill={theme.colors.contentInversePrimary}
          ></path>
        </System.Icon>
      </System.Block>

      <System.Spacing height="scale400" />
      <System.Spacing height="scale700" />
    </>
  )
}
