/**
 * The FlexBox component uses CSS flex power as default. It gives convenient methods to align child elements with a gap that supports scale. The main different usage between Block component is FlexBox respects child element size (width, height).
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.FlexBox columnGap="scale900" rowGap="scale700" justifyContent="center" flexWrap="wrap">
 *       <System.FlexItem>
 *         <System.Button />
 *       </System.FlexItem>
 *       <System.FlexItem>
 *         <System.Button kind="secondary" />
 *       </System.FlexItem>
 *       <System.FlexItem>
 *         <System.Button kind="tertiary" />
 *       </System.FlexItem>
 *     </System.FlexBox>
 *   )
 * }
 * ```
 * @param columnGap - "scale0" | "scale100" | "scale200" | "scale300" | "scale400" | "scale500" | "scale550" | "scale600" | "scale650" | "scale700" | "scale750" | "scale800" | "scale900" | "scale1000" | "scale1200" | "scale1400" | "scale1600" | "scale2400" | "scale3200" | "scale4800"
 * @param rowGap - "scale0" | "scale100" | "scale200" | "scale300" | "scale400" | "scale500" | "scale550" | "scale600" | "scale650" | "scale700" | "scale750" | "scale800" | "scale900" | "scale1000" | "scale1200" | "scale1400" | "scale1600" | "scale2400" | "scale3200" | "scale4800"
 * @param flexDirection - "inherit" | "initial" | "unset" | "row" | "row-reverse" | "column" | "column-reverse"
 * @param columnRatio - number[]
 * @param children - React.ReactNode
 */
export const FlexBox: React.FC<FlexBoxPropsT> = FlexBoxComp
export { FlexItem } from "./flex-item"
export * from "./types"

import { FlexBox as FlexBoxComp } from "./flex-box"
import { FlexBoxPropsT } from "./types"
