/**
 * The Modal component is used to get specific attentions from user. It is recommended to use it with overlay or overridden shadows.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 * import { useTheme } from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const [open, setOpen] = React.useState(false)
 *   const theme = useTheme()
 *
 *   return (
 *     <>
 *       <System.Button onClick={() => setOpen(!open)}>{open ? "Close" : "Open Modal"}</System.Button>
 *       {open && (
 *         <System.Block
 *           position="fixed"
 *           width="100%"
 *           height="100%"
 *           top="0px"
 *           left="0px"
 *           overrides={{
 *             Block: {
 *               boxShadow: theme.lighting.overlay500,
 *               zIndex: theme.zIndex.overlay,
 *             },
 *           }}
 *         />
 *       )}
 *       <System.Modal
 *         title="Sign In / Up"
 *         role="form"
 *         onSubmit={(values) => console.log("value", values)}
 *         loadingSpinner={"Loading..."}
 *         loading={false}
 *         isOpen={open}
 *         cancelText="Cancel"
 *         confirmText="Sign In"
 *         desc="We’ll send you a link to your account."
 *         closeOnClick={() => setOpen(false)}
 *       >
 *         <System.Input
 *           name="email"
 *           label="E-MAIL"
 *           placeholder="Put your e-mail address"
 *           pattern="/^\S+@\S+$/"
 *         />
 *       </System.Modal>
 *     </>
 *   )
 * }
 * ```
 * @param title - string
 * @param desc - string
 * @param children - React.ReactNode
 * @param confirmText - string
 * @param cancelText - string
 * @param isOpen - boolean
 * @param loading - boolean
 * @param loadingSpinner - React.ReactNode
 * @param role - "dialog" | "form"
 * @param closeOnClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param confirmOnClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param onSubmit - SubmitHandler<Record<string, any>>
 * @param overrides - \{ Wrap?: StyleObject; Loading?: StyleObject; ModalHeader?: StyleObject; Title?: StyleObject; ModalBody?: StyleObject; Description?: StyleObject; ModalFooter?: StyleObject }
 */
export const Modal: React.FC<ModalPropsT> = ModalComp
export * from "./types"

import { Modal as ModalComp } from "./modal"
import { ModalPropsT } from "./types"
