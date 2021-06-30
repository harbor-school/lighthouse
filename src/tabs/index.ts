/**
 * The Tabs component.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *     return (
 *         <System.Tabs>
 *           <System.TabList>
 *             <System.Tab>Tab 1</System.Tab>
 *             <System.Tab>Tab 2</System.Tab>
 *             <System.Tab>Tab 3</System.Tab>
 *           </System.TabList>
 *           <System.TabPanels>
 *             <System.TabPanel>TabPanel 1</System.TabPanel>
 *             <System.TabPanel>TabPanel 2</System.TabPanel>
 *             <System.TabPanel>TabPanel 3</System.TabPanel>
 *           </System.TabPanels>
 *         </System.Tabs>
 *     )
 * }
 * ```
 * @param children - React.ReactNode
 * @param current - number
 * @param tabListScroll - boolean
 */
export const Tabs: React.FC<TabsPropsT> = TabsComp
export { TabList } from "./tab-list"
export { Tab } from "./tab"
export { TabPanels } from "./tab-panels"
export { TabPanel } from "./tab-panel"
export * from "./types"

import { Tabs as TabsComp } from "./tabs"
import { TabsPropsT } from "./types"
