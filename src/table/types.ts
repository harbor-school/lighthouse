import { StyleObject } from "styletron-react"

export type TableOverridesT = {
  Wrap?: StyleObject
  Headers?: StyleObject
  HeaderCell?: StyleObject
  Datas?: StyleObject
  DataCell?: StyleObject
}
export type TablePropsT = {
  headerCells?: Array<string | number | React.ReactNode>
  dataCells?: Array<Array<string | number | React.ReactNode>>
  columnRatio?: Array<number>
  overrides?: TableOverridesT
}
