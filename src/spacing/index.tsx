/**
 * The Spacing component is used to make spaces between elements. It is used to add margins or paddings. Theme scale sizings or px unit strings are acceptable as the property value.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *
 *   return (
 *     <System.Spacing width="scale900" height="scale900" backgroundColor="backgroundTertiary" />
 *   )
 * }
 * ```
 * @param width - "scale0" | "scale100" | "scale200" | "scale300" | "scale400" | "scale500" | "scale550" | "scale600" | "scale650" | "scale700" | "scale750" | "scale800" | "scale900" | "scale1000" | "scale1200" | "scale1400" | "scale1600" | "scale2400" | "scale3200" | "scale4800"
 * @param height - "scale0" | "scale100" | "scale200" | "scale300" | "scale400" | "scale500" | "scale550" | "scale600" | "scale650" | "scale700" | "scale750" | "scale800" | "scale900" | "scale1000" | "scale1200" | "scale1400" | "scale1600" | "scale2400" | "scale3200" | "scale4800"
 * @param backgroundColor - string
 * @param display - System.BlockPropsT["display"]
 * @param guide - boolean
 */
export const Spacing: React.FC<SpacingPropsT> = SpacingComp
export * from "./types"

import { Spacing as SpacingComp } from "./spacing"
import { SpacingPropsT } from "./types"
