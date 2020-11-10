import { StyleObject } from "styletron-react"
import { KIND } from "./constants"

export type AlertOverridesT = {
  Wrap?: StyleObject
  AlertHeader?: StyleObject
  AlertBody?: StyleObject
}
export type AlertPropsT = {
  title?: string
  body?: React.ReactNode
  message?: string
  kind?: keyof typeof KIND
  show?: boolean
  closeOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  overrides?: AlertOverridesT
}
