/**
 * The ListItem component is used to display sequencing contents.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <>
 *       <System.ListItem>
 *         <System.ListItemLabel>
 *         <System.LabelMedium>Item 01</System.LabelMedium>
 *         <System.ParagraphXSmall>Description</System.ParagraphXSmall>
 *         </System.ListItemLabel>
 *       </System.ListItem>
 *       <System.ListItem>
 *         <System.ListItemLabel>
 *         <System.LabelMedium>Item 02</System.LabelMedium>
 *         <System.ParagraphXSmall>Description</System.ParagraphXSmall>
 *         </System.ListItemLabel>
 *       </System.ListItem>
 *     </>
 *   )
 * }
 * ```
 * @param children - React.ReactNode
 * @param endEnhancer - React.ReactNode
 * @param onClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param overrides - \{ Wrap?: StyleObject; EndEnhancer?: StyleObject }
 */
export const ListItem: React.FC<ListItemPropsT> = ListItemComp
export const ListItemLabel: React.FC<ListItemLabelPropsT> = ListItemLabelComp
export * from "./types"

import { ListItem as ListItemComp } from "./list-item"
import { ListItemLabel as ListItemLabelComp } from "./list-item-label"
import { ListItemLabelPropsT, ListItemPropsT } from "./types"
