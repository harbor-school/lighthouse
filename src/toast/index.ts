/**
 * The Toast component for actions and events
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *     return (
 *         <System.Toast />
 *     )
 * }
 * ```
 * @param placement - "center" | "topRight" | "bottomRight"
 */
export const Toast: React.FC<ToastPropsT> = ToastComp
export * from "./types"

import { Toast as ToastComp } from "./toast"
import { ToastPropsT } from "./types"
