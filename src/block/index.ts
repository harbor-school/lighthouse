/**
 * Like its name, the Block component is a base Lego block to build whole layouts. It accepts common layout CSS properties and could be added with media query using override. A responsive grid layout could be made with Block components like the below example. (Resize browser to view.)
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 * import { useTheme } from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const theme = useTheme()
 *   return (
 *     <System.Block
 *       display="grid"
 *       gridColumnGap="scale1200"
 *       gridRowGap="scale900"
 *       overrides={{
 *         Block: {
 *           gridTemplateColumns: "1fr 3fr",
 *           padding: theme.sizing.scale900,
 *           [theme.mediaQuery.large]: { // responsive mediaQuery Usage
 *             gridTemplateColumns: "1fr",
 *             padding: `0 ${theme.sizing.scale800}`,
 *           },
 *         },
 *       }}
 *     >
 *       <System.Block backgroundColor="backgroundPrimary" // Accepts all semantic color properties from the theme
 *       >
 *         <System.DisplayXSmall>Account</System.DisplayXSmall>
 *         <System.Spacing height="scale400" />
 *         <System.Block
 *           font="font700" // Accepts all themeable font properties
 *         >
 *           John Doe
 *         </System.Block>
 *       </System.Block>
 *       <System.Block display="flex" alignItems="center" backgroundColor="backgroundPrimary">
 *         <System.Block font="font700" color="contentPrimary">
 *           <System.StyledLink>
 *             <System.Block font="font700" color="primary">
 *               Become a member
 *             </System.Block>
 *           </System.StyledLink>{" "}
 *           to get access of all contents
 *         </System.Block>
 *       </System.Block>
 *     </System.Block>
 *   )
 * }
 * ```
 * @param as - React.ElementType
 * @param display - React.ElementType
 * @param color - string | Array\<string\>
 * @param backgroundColor - string | Array\<string\>
 * @param font - string | Array\<string\>
 * @param width - 0 | string | Array\<string\>
 * @param height - 0 | string | Array\<string\>
 * @param paddingTop - 0 | string | Array\<string\>
 * @param paddingRight - 0 | string | Array\<string\>
 * @param paddingBottom - 0 | string | Array\<string\>
 * @param paddingLeft - 0 | string | Array\<string\>
 * @param marginTop - 0 | string | Array\<string\>
 * @param marginRight - 0 | string | Array\<string\>
 * @param marginBottom - 0 | string | Array\<string\>
 * @param marginLeft - 0 | string | Array\<string\>
 * @param overrides - \{ Block?: StyletronReact.StyleObject }
 */
export const Block: React.FC<BlockPropsT> = BlockComp
export * from "./types"

import { Block as BlockComp } from "./block"
import { BlockPropsT } from "./types"
