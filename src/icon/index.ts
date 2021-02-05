/**
 * The Icon component is used to display icons. Add paths as children cause the default wrapper of the Icon component is the "SVG" tag.
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
 *     <System.Icon
 *       viewBox="0 0 18 18"
 *       width={theme.sizing.scale800}
 *       color={theme.colors.contentSecondary}
 *     >
 *       <path
 *         fillRule="evenodd"
 *         clipRule="evenodd"
 *         d="M18 0H0V18H18V0ZM13.478 7.00702C13.478 10.053 11.156 13.572 6.91199 13.572C5.612 13.572 4.39703 13.19 3.38 12.542C3.56 12.564 3.74402 12.573 3.92902 12.573C5.008 12.573 6.00299 12.204 6.79498 11.583C5.78699 11.565 4.93201 10.899 4.64001 9.98102C4.77899 10.008 4.92303 10.022 5.07202 10.022C5.28302 10.022 5.48499 9.995 5.67902 9.94101C4.62598 9.729 3.83002 8.793 3.83002 7.677V7.64502C4.14001 7.81702 4.49603 7.92001 4.87402 7.93402C4.25702 7.52002 3.84802 6.81302 3.84802 6.01202C3.84802 5.58902 3.96002 5.19302 4.15802 4.85101C5.297 6.246 6.99799 7.16901 8.914 7.263C8.87903 7.09201 8.85602 6.91702 8.85602 6.737C8.85602 5.46301 9.89099 4.42801 11.164 4.42801C11.826 4.42801 12.425 4.707 12.848 5.15701C13.374 5.05301 13.869 4.86502 14.315 4.599C14.139 5.13901 13.775 5.59399 13.298 5.87701C13.766 5.819 14.211 5.69702 14.625 5.513C14.315 5.97601 13.923 6.38501 13.473 6.70901C13.478 6.80902 13.478 6.90701 13.478 7.00702Z"
 *       />
 *     </System.Icon>
 *   )
 * }
 * ```
 * @param width - string | number
 * @param height - string | number
 * @param viewBox - string
 * @param color - string
 * @param align - "center" | "left" | "right"
 * @param children - React.ReactNode
 */
export const Icon: React.FC<IconPropsT> = IconComp
const Icons = { Menu, DivMenu, ExternalLink, Arrow, Lock, Symbol }
export { Icons }
export * from "./types"

import { Icon as IconComp } from "./icon"
import { IconPropsT } from "./types"
import { Menu } from "./menu"
import { DivMenu } from "./div-menu"
import { ExternalLink } from "./external-link"
import { Arrow } from "./arrow"
import { Lock } from "./lock"
import { Symbol } from "./symbol"
