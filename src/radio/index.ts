/**
 * The Radio component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   const [radio, setRadio] = useState("ios")
 *
 *   return (
 *      <System.Block>
 *        <System.Radio
 *          label="IOS"
 *          value="ios"
 *          name="os"
 *          checked={radio === "ios"}
 *          onChange={e => setRadio(e.target.value)}
 *        />
 *        <System.Spacing height="scale600" />
 *        <System.Radio
 *          label="Android"
 *          value="android"
 *          name="os"
 *          checked={radio === "android"}
 *          onChange={e => setRadio(e.target.value)}
 *        />
 *      </System.Block>
 *   )
 * }
 * ```
 * @param label - string
 * @param checked - boolean
 * @param value - string
 * @param name - string
 * @param required - boolean
 * @param onChange - (event: React.FocusEvent<HTMLInputElement>) => void
 * @param overrides - \{ Wrap?: StyleObject }
 */
export const Radio: React.FC<RadioPropsT> = RadioComp
export * from "./types"

import { Radio as RadioComp } from "./radio"
import { RadioPropsT } from "./types"
