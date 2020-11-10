import * as React from "react"
import { Override } from "framer"
import * as System from "../../../../lighthouse"

export function ListItem(): Override {
  return {
    endEnhancer: <System.Button>Update</System.Button>,
  }
}
