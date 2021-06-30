/**
 * The Toast component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const [toastShow, setToastShow] = React.useState(false)
 *
 *   return (
 *     <>
 *       <System.Button onClick={() => setToastShow(!toastShow)}>Show Toast</System.Button>
 *
 *       <System.Toast
 *         show={toastShow}
 *         onButtonClick={() => setToastShow(false)}
 *       />
 *     </>
 *   )
 * }
 * ```
 * @param show - boolean
 * @param kind - "primary" | "secondary"
 * @param message - string
 * @param buttonText - string
 * @param onButtonClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param overrides - \{ Wrap?: StyletronReact.StyleObject; Loading?: StyletronReact.StyleObject; ModalHeader?: StyletronReact.StyleObject; Title?: StyletronReact.StyleObject; ModalBody?: StyletronReact.StyleObject; Description?: StyletronReact.StyleObject; ModalFooter?: StyletronReact.StyleObject }
 */
export const Toast: React.FC<ToastPropsT> = ToastComp
export * from "./types"

import { Toast as ToastComp } from "./toast"
import { ToastPropsT } from "./types"
