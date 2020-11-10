/**
 * Like its name, the Block component is a base Lego block to build whole layouts. It accepts common layout CSS properties and could be added with mediaQuery using override. A responsive Grid layout could be made with Block components like the below example.
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
 *           [theme.mediaQuery.large]: { // responsive mediaQuery Usage (resize browser to view)
 *             gridTemplateColumns: "1fr",
 *             padding: `0 ${theme.sizing.scale800}`,
 *           },
 *         },
 *       }}
 *     >
 *       <System.Block backgroundColor="backgroundPrimary" // Accepts all themeable color properties
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
 *             <System.Block font="font700" color={theme.colors.primary}>
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
 * @param as - ElementType
 * @param display - ElementType
 * @param color - ResponsiveT\<string\>
 * @param backgroundColor - ResponsiveT\<string\>
 * @param font - ResponsiveT\<string\>
 * @param width - ResponsiveT\<ScaleT\>
 * @param height - ResponsiveT\<ScaleT\>
 * @param paddingTop - ResponsiveT\<ScaleT\>
 * @param paddingRight - ResponsiveT\<ScaleT\>
 * @param paddingBottom - ResponsiveT\<ScaleT\>
 * @param paddingLeft - ResponsiveT\<ScaleT\>
 * @param marginTop - ResponsiveT\<ScaleT\>
 * @param marginRight - ResponsiveT\<ScaleT\>
 * @param marginBottom - ResponsiveT\<ScaleT\>
 * @param marginLeft - ResponsiveT\<ScaleT\>
 * @param overrides - \{ Block?: StyleObject }
 */
export const Block: React.FC<BlockPropsT> = BlockComp
export * from "./types"

import { Block as BlockComp } from "./block"
import { BlockPropsT } from "./types"
