import * as React from "react"
import { isValidElementType } from "react-is"

export type ConfigurationOverrideFunctionT = ({}) => Record<string, unknown>
export type ConfigurationOverrideObjectT = Record<string, unknown>

export type ConfigurationOverrideT = ConfigurationOverrideObjectT | ConfigurationOverrideFunctionT

export type OverrideObjectT = {
  component?: React.ComponentType<any>
  props?: ConfigurationOverrideT
  style?: ConfigurationOverrideT
}

export type OverrideT = OverrideObjectT | React.ComponentType<any>

/**
 * Given an override argument, returns the component implementation override if it exists
 */
export function getOverride(override: any): any {
  if (isValidElementType(override)) {
    return override
  }

  // Check if override is OverrideObjectT
  if (override && typeof override === "object") {
    return override.component
  }

  // null/undefined
  return override
}

/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */
export function getOverrideProps(override: OverrideT) {
  if (override && typeof override === "object") {
    if (typeof override.props === "object") {
      return {
        ...override.props,
        $style: override.style,
      }
    } else {
      return {
        $style: override.style,
      }
    }
  }
  return {}
}

/**
 * Get a convenient override array that will always have [component, props]
 */
export function getOverrides(override: any, defaultComponent: React.ComponentType<any>) {
  const Component = getOverride(override) || defaultComponent

  if (override && typeof override === "object" && typeof override.props === "function") {
    const DynamicOverride = React.forwardRef((props, ref) => {
      const mappedProps = override.props(props)
      const nextProps = getOverrideProps({ ...override, props: mappedProps })
      return <Component ref={ref} {...nextProps} />
    })
    DynamicOverride.displayName = Component.displayName
    return [DynamicOverride, {}]
  }

  const props = getOverrideProps(override)
  return [Component, props]
}
