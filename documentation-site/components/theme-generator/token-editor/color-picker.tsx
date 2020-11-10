import * as React from "react"

export function ColorPicker({ value, onChange }) {
  return (
    <>
      <input
        type="color"
        value={value}
        onChange={onChange}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          opacity: "0",
          cursor: "pointer",
        }}
      />
      Color Picker
    </>
  )
}

ColorPicker.defaultProps = {}
