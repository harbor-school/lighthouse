/**
 * The Spinner component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.Spinner />
 *   )
 * }
 * ```
 * @param overrides - \{ Round?: StyleObject; }
 */
export const Spinner: React.FC<SpinnerPropsT> = SpinnerComp
export * from "./types"

import { Spinner as SpinnerComp } from "./spinner"
import { SpinnerPropsT } from "./types"
