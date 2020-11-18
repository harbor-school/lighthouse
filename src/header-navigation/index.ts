/**
 * The HeaderNavigation component is used to display the main menus. The component has default padding and a gap between the logo block and the menu area.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 * import { useTheme } from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const theme = useTheme()
 *
 *   return (
 *     <System.HeaderNavigation>
 *       <System.Block>
 *         <System.Icon width="98px" height="98px">
 *           <path d="M98 0H0V98L98 0Z" fill="#005AFA" />
 *           <path d="M0 98L98 0V98H0Z" fill="#E8E8E8" />
 *         </System.Icon>
 *       </System.Block>
 *       <System.Block
 *         overrides={{
 *           Block: {
 *             [theme.mediaQuery.large]: {
 *               // responsive mediaQuery Usage (resize browser to view)
 *               display: "none",
 *             },
 *           },
 *         }}
 *       >
 *         <System.HeaderNavigationItem>
 *           <System.ParagraphLarge>Item0</System.ParagraphLarge>
 *         </System.HeaderNavigationItem>
 *         <System.HeaderNavigationItem>
 *           <System.ParagraphLarge>Item1</System.ParagraphLarge>
 *         </System.HeaderNavigationItem>
 *       </System.Block>
 *
 *       <System.Block
 *         overrides={{
 *           Block: {
 *             display: "none",
 *             [theme.mediaQuery.large]: {
 *               // responsive mediaQuery Usage (resize browser to view)
 *               display: "block",
 *             },
 *           },
 *         }}
 *       >
 *         <System.HeaderNavigationItem>
 *           <System.Icon width="24px" height="24px">
 *             <path
 *               d="M 3 12 L 21 12 M 3 6 L 21 6 M 3 18 L 21 18"
 *               strokeWidth="2"
 *               stroke="rgb(0,0,0)"
 *               strokeLinecap="round"
 *               strokeLinejoin="round"
 *               strokeDasharray=""
 *             ></path>
 *           </System.Icon>
 *         </System.HeaderNavigationItem>
 *       </System.Block>
 *     </System.HeaderNavigation>
 *   )
 * }
 * ```
 * @param children - React.ReactNode
 * @param overrides - \{ Header?: StyletronReact.StyleObject }
 */
export const HeaderNavigation: React.FC<HeaderNavigationPropsT> = HeaderNavigationComp
export { HeaderNavigationItem } from "./header-navigation-item"
export * from "./types"

import { HeaderNavigation as HeaderNavigationComp } from "./header-navigation"
import { HeaderNavigationPropsT } from "./types"
