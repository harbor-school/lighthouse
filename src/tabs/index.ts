/**
 * The Tabs component for actions and events
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *     return (
 *         <System.Tabs />
 *     )
 * }
 * ```
 * @param placement - "center" | "topRight" | "bottomRight"
 */
export const Tabs: React.FC<TabsPropsT> = TabsComp
export { TabList } from "./tab-list"
export { Tab } from "./tab"
export { TabPanels } from "./tab-panels"
export { TabPanel } from "./tab-panel"
export * from "./types"

import { Tabs as TabsComp } from "./tabs"
import { TabsPropsT } from "./types"
