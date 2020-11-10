import * as React from "react"
import { useEffect, useRef } from "react"
import * as System from "../../../../../lighthouse"
import { useTheme } from "../../../../../lighthouse"

export function NewRowInput({ onBlur }) {
  const theme = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [ref])

  return (
    <System.Block font="ParagraphSmall">
      <input
        ref={ref}
        placeholder="Type New key name..."
        onBlur={onBlur}
        style={{
          // remove input styles
          appearance: "none",
          border: "none",
          outline: "unset",
          padding: "unset",
          boxSizing: "border-box",
          font: "inherit",
          background: "transparent",
          color: theme.colors.contentPrimary,
        }}
      />
    </System.Block>
  )
}
