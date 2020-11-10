import * as React from "react"
import { UseFormMethods } from "react-hook-form"

export const FormContext = React.createContext<UseFormMethods<Record<string, unknown>>>(
  {} as UseFormMethods<Record<string, unknown>>
)
