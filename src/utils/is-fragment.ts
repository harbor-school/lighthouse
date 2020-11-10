import * as React from "react"

export function isReactFragment(variableToInspect) {
  if (variableToInspect.type) {
    return variableToInspect.type === React.Fragment
  }
  return variableToInspect === React.Fragment
}
