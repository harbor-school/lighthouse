/**
 * The Alert component is used to notify important messages to the user. It is recommended, use it with an overlay or overridden shadows.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 * import { useTheme } from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const [show, setShow] = React.useState(false)
 *   const theme = useTheme()
 *
 *   return (
 *     <>
 *       <System.Button onClick={() => setShow(!show)}>{show ? "Close" : "Show Alert"}</System.Button>
 *       {show && (
 *         <System.Block
 *           position="fixed"
 *           width="100%"
 *           height="100%"
 *           top="0px"
 *           left="0px"
 *           overrides={{
 *             Block: {
 *               boxShadow: theme.lighting.overlay400,
 *               zIndex: theme.zIndex.overlay,
 *             },
 *           }}
 *         />
 *       )}
 *       <System.Alert
 *         show={show}
 *         title="Title"
 *         message="Message"
 *         kind="negative"
 *         closeOnClick={() => setShow(false)}
 *       />
 *     </>
 *   )
 * }
 * ```
 * @param title - string
 * @param body - React.ReactNode
 * @param message - string
 * @param kind - "positive" | "negative"
 * @param show - boolean
 * @param closeOnClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param overrides - \{ Wrap?: StyleObject; AlertHeader?: StyleObject; AlertBody?: StyleObject }
 */
export const Alert: React.FC<AlertPropsT> = AlertComp
export * from "./types"

import { Alert as AlertComp } from "./alert"
import { AlertPropsT } from "./types"
