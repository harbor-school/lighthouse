/**
 * The Table component is used for large amounts of information or structured data.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.Table
 *       columnRatio={[1, 2, 1]}
 *       headerCells={["NAME", "ARTIST", "STATS"]}
 *       dataCells={[
 *          ["Dynamite", "BTS", 1],
 *          ["WAP", "Cardi B Featuring Megan Thee Stallion", 2],
 *          ["Laugh Now Cry Later", "Drake Featuring Lil Durk", 3],
 *       ]}
 *     />
 *   )
 * }
 * ```
 * @param headerCells - Array<string | number>
 * @param dataCells - Array<Array<string | number>>
 * @param columnRatio - Array<number>
 * @param overrides - \{ Wrap?: StyleObject; Headers?: StyleObject; HeaderCell?: StyleObject; Datas?: StyleObject; DataCell?: StyleObject }
 */
export const Table: React.FC<TablePropsT> = TableComp
export * from "./types"

import { Table as TableComp } from "./table"
import { TablePropsT } from "./types"
