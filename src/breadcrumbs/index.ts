/**
 * The Breadcrumbs component is used to show detail where the user is located in the application.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 * import { useTheme } from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const theme = useTheme()
 *   return (
 *     <System.Breadcrumbs>
 *       <System.ParagraphLarge padding={`0px ${theme.sizing.scale700}`}>
 *         Item0
 *       </System.ParagraphLarge>
 *       <System.ParagraphLarge padding={`0px ${theme.sizing.scale700}`}>
 *         Item1
 *       </System.ParagraphLarge>
 *     </System.Breadcrumbs>
 *   )
 * }
 * ```
 * @param children - React.ReactNode
 * @param overrides - \{ Wrap?: StyletronReact.StyleObject; Item?: StyletronReact.StyleObject }
 */
export const Breadcrumbs: React.FC<BreadcrumbsPropsT> = BreadcrumbsComp
export * from "./types"

import { Breadcrumbs as BreadcrumbsComp } from "./breadcrumbs"
import { BreadcrumbsPropsT } from "./types"
