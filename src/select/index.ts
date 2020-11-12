/**
 * The Select component is used to suggest more than three choices to the user. It is recommended to use it with overlay or overridden shadows.
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
 *       {open && (
 *         <System.Block
 *           position="fixed"
 *           width="100%"
 *           height="100%"
 *           top="0px"
 *           left="0px"
 *           overrides={{
 *             Block: {
 *               boxShadow: theme.lighting.overlay200,
 *               zIndex: theme.zIndex.overlay,
 *             },
 *           }}
 *         />
 *       )}
 *       <System.Select
 *         options={[
 *           {
 *             label: "Option 0",
 *             key: "option0",
 *           },
 *           {
 *             label: "Option 1",
 *             key: "option1",
 *           },
 *           {
 *             label: "Option 2",
 *             key: "option2",
 *           },
 *         ]}
 *         placeholder="Select Option"
 *         onChange={(value) => {
 *           alert(value)
 *           setOpen(false)
 *         }}
 *         onClick={() => setOpen(true)}
 *         onClickOutside={() => setOpen(false)}
 *         isOpen={open}
 *       />
 *     </>
 *   )
 * }
 * ```
 * @param options - Array<SelectOption>
 * @param placeholder - string
 * @param active - number
 * @param isOpen - boolean
 * @param animate - boolean
 * @param onClick - (event: React.MouseEvent<HTMLElement>) => void
 * @param onChange - (newValue: number) => void
 * @param onClickOutside - (event?: React.MouseEvent<HTMLElement>) => void
 * @param overrides - \{ Wrap?: StyleObject; OptionList?: StyleObject; Option?: StyleObject; OptionLabel?: StyleObject }
 */
export const Select: React.FC<SelectPropsT> = SelectComp
export * from "./types"

import { Select as SelectComp } from "./select"
import { SelectPropsT } from "./types"
