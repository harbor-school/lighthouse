/**
 * Typography components are used to display content. It accepts themeable properties for color and font property.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.HeadingLarge>Heading</System.HeadingLarge>
 *   )
 * }
 * ```
 * @param children - React.ReactNode
 * @param color - string | Array\<string\>
 * @param font - string | Array\<string\>
 * @param overrides - \{ Block?: StyletronReact.StyleObject }
 */
export * from "./types"
export * from "./typography"
