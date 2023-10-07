import * as React from "react"
import { StyleObject } from "styletron-react"

type StyleOverride<T> =
  | StyleObject
  | ((props: { $theme: any } & React.PropsWithChildren<T>) => StyleObject)

  // @ts-ignore
type ComponentOverride<T> = React.ComponentType<T> | React.RefForwardingComponent<T>

interface OverrideObject<T> {
  component?: ComponentOverride<T>
  props?: any
  style?: StyleOverride<T>
}

export type Override<T> = OverrideObject<T> | React.ComponentType<T>

export interface Overrides<T> {
  [key: string]: Override<T>
}
