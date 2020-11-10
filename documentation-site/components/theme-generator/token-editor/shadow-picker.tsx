import * as React from "react"
import { useState } from "react"
import { hexAToHSLA, HSLAToHexA } from "../../../utils"
import { ShadowPicker as Picker } from "react-shadow-picker"

export function ShadowPicker({ placeholder, onChange }) {
  const [shadow, setShadow] = useState(hslaToHexShadow(placeholder))

  return (
    <Picker
      value={shadow}
      onChange={(value) => {
        setShadow(value)
        onChange(hexToHslaShadow(value))
      }}
    />
  )
}

ShadowPicker.defaultProps = {
  onChange: () => void 0,
}

function hslaToHexShadow(value) {
  const parts = value.split(" ")
  const color = parts[parts.length - 1]
  parts.pop()
  const newArr = [...parts, HSLAToHexA(color)]
  return newArr.join(" ")
}

function hexToHslaShadow(value) {
  const parts = value.split(" ")
  const color = parts[parts.length - 1]
  parts.pop()
  const newArr = [...parts, hexAToHSLA(color)]
  return newArr.join(" ")
}
