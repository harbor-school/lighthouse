/**
 * The ProgressBar component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.ProgressBar value={30} infinite />
 *   )
 * }
 * ```
 * @param value - number
 * @param infinite - boolean
 * @param overrides - \{ Wrap?: StyletronReact.StyleObject; Bar?: StyletronReact.StyleObject }
 */
export const ProgressBar: React.FC<ProgressBarPropsT> = ProgressBarComp
export * from "./types"

import { ProgressBar as ProgressBarComp } from "./progress-bar"
import { ProgressBarPropsT } from "./types"
