/**
 * The ColorChip component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *     return (
 *         <System.ColorChip kind="semantic" colorSemantic="backgroundTertiary" />
 *     )
 * }
 * ```
 * @param kind - "scale" | "semantic"
 * @param colorScale - keyof ColorTokensT
 * @param colorSemantic - keyof CoreSemanticColorTokensT
 */
export const ColorChip: React.FC<ColorChipPropsT> = ColorChipComp
export * from "./types"

import { ColorChip as ColorChipComp } from "./color-chip"
import { ColorChipPropsT } from "./types"
