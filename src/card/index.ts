/**
 * The Card component is used to display information with alignments
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.Card label="NEW" title="Example Card">
 *       <System.CardBody>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *       </System.CardBody>
 *       <System.CardAction>
 *       <System.Button kind="tertiary">Learn more</System.Button>
 *       </System.CardAction>
 *     </System.Card>
 *   )
 * }
 * ```
 * @param title - string
 * @param label - string
 * @param children - React.ReactNode
 * @param onClick - (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param overrides - \{ Wrap?: StyleObject }
 */
export const Card: React.FC<CardPropsT> = CardComp
export { CardAction } from "./card-action"
export { CardBody } from "./card-body"
export * from "./types"

import { Card as CardComp } from "./card"
import { CardPropsT } from "./types"
