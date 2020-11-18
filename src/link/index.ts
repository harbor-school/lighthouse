/**
 * The StyledLink component is used to style links.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.StyledLink href="https://harbor.school" target="_blank" highlight>
 *       Your account
 *     </System.StyledLink>
 *   )
 * }
 * ```
 * @param href - string
 * @param target - "_blank" | "_self" | "_parent" | "_top"
 * @param children - React.ReactNode
 * @param highlight - boolean
 * @param as - React.ElementType
 * @param onClick - (event: React.MouseEvent<HTMLElement>) => void
 * @param overrides - \{ Link?: StyletronReact.StyleObject }
 */
export const StyledLink: React.FC<StyledLinkPropsT> = StyledLinkComp
export * from "./types"

import { StyledLink as StyledLinkComp } from "./link"
import { StyledLinkPropsT } from "./types"
