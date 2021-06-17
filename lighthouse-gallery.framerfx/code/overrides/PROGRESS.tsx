import * as React from "react"
import { Override } from "framer"
import * as System from "../../../../lighthouse"

export function ProgressBar(): Override {
  return {
    overrides: {
      Bar: {
        background: "red",
      },
      Wrap: {
        background: "green",
      },
    },
  }
}
