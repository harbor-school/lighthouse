/**
 * The LightingChip component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *     return (
 *         <System.LightingChip lighting="shadow500" />
 *     )
 * }
 * ```
 * @param lighting - keyof LightingT
 */
export const LightingChip: React.FC<LightingChipPropsT> = LightingChipComp
export * from "./types"

import { LightingChip as LightingChipComp } from "./lighting-chip"
import { LightingChipPropsT } from "./types"
