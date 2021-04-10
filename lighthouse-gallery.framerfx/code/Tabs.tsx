import * as React from "react"
import * as System from "../../../lighthouse"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./utils/withHOC"
import { placeholderState } from "./utils/placeholderState"

const InnerTabs = ({ tabs, panels, current }) => {
  return (
    <System.Tabs current={current}>
      <System.TabList>
        {tabs.map((tab, id) => (
          <System.Tab key={id}>{tab}</System.Tab>
        ))}
      </System.TabList>
      <System.TabPanels>
        {panels.map((pannel, id) => (
          <System.TabPanel key={id}>
            <div className="tab-panel-wrap" key={id}>
              {pannel}
            </div>
          </System.TabPanel>
        ))}
      </System.TabPanels>
      {panels.length === 0 &&
        React.createElement(placeholderState, {
          title: "Add Contents",
          label: "Add formBody or formFooter Frame.",
          height: "140px",
        })}
    </System.Tabs>
  )
}

export const Tabs = withHOC(InnerTabs)

Tabs.defaultProps = {
  width: 280,
  height: 208,
  ...System.Tabs.defaultProps,
}

addPropertyControls(Tabs, {
  tabs: {
    type: ControlType.Array,
    control: {
      type: ControlType.String,
    },
    defaultValue: ["Tab 1", "Tab 2", "Tab 3"],
  },
  panels: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  current: {
    type: ControlType.Number,
    displayStepper: true,
    min: 0,
  },
})
