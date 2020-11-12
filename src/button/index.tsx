/**
 * The Button component is used for actions and events.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.Button onClick={() => alert("Hello.")}>Button</System.Button>
 *   )
 * }
 * ```
 * @param kind - "primary" | "secondary" | "tertiary"
 * @param shape - "default" | "pill" | "circle"
 * @param type - "button" | "submit" | "reset"
 * @param children - React.ReactNode
 * @param startEnhancer - React.ReactNode
 * @param onClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param overrides - \{ BaseButton?: StyleObject; StartEnhancer?: StyleObject; ButtonText?: StyleObject }
 * ```tsx
 * export default () => {
 *   return (
 *     <System.Button
 *      kind="tertiary"
 *      overrides={{
 *        BaseButton: { backgroundColor: "red" },
 *        ButtonText: { WebkitTextFillColor: "white" }
 *      }}
 *     >
 *      or Sign In
 *     </System.Button>
 *   )
 * }
```
 */
export const Button: React.FC<ButtonPropsT> = React.forwardRef(function Button(
  props: ButtonPropsT,
  ref: any
) {
  return <ButtonComp forwardedRef={ref} {...props} />
})
export * from "./types"

import * as React from "react"
import { Button as ButtonComp } from "./button"
import { ButtonPropsT } from "./types"

Button.defaultProps = {
  overrides: {},
  kind: "primary",
  shape: "default",
  type: "button",
  children: "Button Label",
}
