/**
 * The Input component is used to get user input.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const [value, setValue] = React.useState("")
 *
 *   return (
 *      <System.Input onChange={e => setValue(e.target.value)} caption="caption" />
 *   )
 * }
 * ```
 * @param label - string
 * @param caption - string
 * @param placeholder - string
 * @param defaultValue - string
 * @param name - string
 * @param required - boolean
 * @param pattern - string
 * @param onChange - (event: React.FocusEvent<HTMLInputElement>) => void
 * @param onBlur - (event: React.FocusEvent<HTMLInputElement>) => void
 * @param overrides - \{ Wrap?: StyletronReact.StyleObject; LabelText?: StyletronReact.StyleObject; Caption?: StyletronReact.StyleObject; FocusBar?: StyletronReact.StyleObject; BaseInput?: StyletronReact.StyleObject }
 */
export const Input: React.FC<InputPropsT> = InputComp
export * from "./types"

import { Input as InputComp } from "./input"
import { InputPropsT } from "./types"
