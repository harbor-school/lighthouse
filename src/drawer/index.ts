/**
 * The Drawer component. It is recommended to use it with overlay or overridden shadows.
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
 *       <System.Button onClick={() => setOpen(!open)}>{open ? "Close" : "Open Drawer"}</System.Button>
 *       {open && (
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
 *       <System.Drawer
 *         placement="bottom"
 *         isOpen={open}
 *         onClickOutside={() => setOpen(false)}
 *       >
 *         <System.ListItemLabel>
 *           <System.LabelMedium padding="scale900">Menu Item</System.LabelMedium>
 *         </System.ListItemLabel>
 *       </System.Drawer>
 *     </>
 *   )
 * }
 * ```
 * @param isOpen - boolean
 * @param placement - "top" | "right" | "bottom" | "left"
 * @param children - React.ReactNode
 * @param onClickOutside - (event: React.MouseEvent<HTMLElement>) => void
 * @param overrides - \{ Wrap?: StyleObject }
 */
export const Drawer: React.FC<DrawerPropsT> = DrawerComp
export * from "./types"

import { Drawer as DrawerComp } from "./drawer"
import { DrawerPropsT } from "./types"
