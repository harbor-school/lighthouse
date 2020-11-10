import * as React from "react"
import * as System from "../../../lighthouse"
import { useTheme } from "../../../lighthouse"

export function DesktopView({ children }) {
  const theme = useTheme()
  return (
    <System.Block
      overrides={{
        Block: {
          [theme.mediaQuery.large]: {
            display: "none",
          },
        },
      }}
    >
      {children}
    </System.Block>
  )
}

export function MobileView({ children }) {
  const theme = useTheme()
  return (
    <System.Block
      overrides={{
        Block: {
          display: "none",
          [theme.mediaQuery.large]: {
            display: "block",
          },
        },
      }}
    >
      {children}
    </System.Block>
  )
}
