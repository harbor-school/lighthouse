export function saveTableDataToStore({
  type,
  colorTokenKind,
  newTableData,
  themeEditor,
  setThemeEditor,
}) {
  const newThemeEditorData = { ...themeEditor }
  // eslint-disable-next-line prefer-const
  let newData = { ...themeEditor[type] }
  if (type === "colors") {
    newData[colorTokenKind] = newTableData
    newThemeEditorData[type] = { ...newThemeEditorData[type], ...newData }
  } else {
    newData = newTableData
    newThemeEditorData[type] = { ...newData }
  }
  setThemeEditor({ ...newThemeEditorData })
}

export function newThemeTableRow({
  type,
  newRowData,
  tableData,
  setTableData,
  colorTokenKind,
  themeEditor,
  setThemeEditor,
}) {
  // update view
  const newTableData = tableData
  newTableData[newRowData[0]] = newRowData[1]
  delete newTableData["newRow"]
  setTableData({ ...newTableData })
  // save newTableData to store
  saveTableDataToStore({
    type,
    colorTokenKind,
    newTableData,
    themeEditor,
    setThemeEditor,
  })
}

export function editThemeTableRow({
  type,
  key,
  value,
  tableData,
  setTableData,
  colorTokenKind,
  themeEditor,
  setThemeEditor,
}) {
  // eslint-disable-next-line prefer-const
  let newTableData = { ...tableData } // use let to prevent "TypeError: Cannot assign to read only property  object" Error on Chrome
  newTableData[key] = value

  setTableData({ ...newTableData })
  // save newTableData to store
  saveTableDataToStore({
    type,
    colorTokenKind,
    newTableData,
    themeEditor,
    setThemeEditor,
  })
}

export function deleteThemeTableRow({
  type,
  key,
  tableData,
  setTableData,
  colorTokenKind,
  themeEditor,
  setThemeEditor,
}) {
  // update view
  const { [key]: foo, ...newTableData } = tableData // delete object property using spread operator
  setTableData({ ...newTableData })
  // save newTableData to store
  saveTableDataToStore({
    type,
    colorTokenKind,
    newTableData,
    themeEditor,
    setThemeEditor,
  })
}
