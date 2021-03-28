import * as React from "react"
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useOnClickOutside } from "../hooks"
import { AnimateOptions } from "./animate-options"
import {
  OptionEndEnhancer,
  OptionList,
  Option,
  OptionLabel,
  Placeholder,
  Wrap,
} from "./styled-components"
import { SelectPropsT } from "./types"

export const Select: React.FC<SelectPropsT> = ({
  overrides = {},
  options = [],
  placeholder,
  active,
  onChange = () => void 0,
  isOpen = false,
  animate,
  onClick = () => void 0,
  onClickOutside = () => void 0,
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme, $isOpen: isOpen }

  const ref = useRef(null)
  useOnClickOutside(ref, onClickOutside)
  const [newValue, setNewValue] = useState(-1)
  const [readyToChange, setReadyToChange] = useState(false)
  useEffect(() => {
    if (readyToChange && typeof newValue === "number" && newValue >= 0) onChange(newValue)
    else setReadyToChange(false) // reset state when user click outside
  }, [readyToChange, newValue])

  return (
    <Wrap ref={ref} $style={overrides.Wrap} {...sharedProps}>
      <Placeholder onClick={onClick} {...sharedProps}>
        {typeof active === "number" && (placeholder || options[active].label)}
      </Placeholder>
      <OptionList $style={overrides.OptionList} {...sharedProps}>
        <AnimateOptions isOpen={isOpen} animate={animate} setReadyToChange={setReadyToChange}>
          {options.map(({ disabled, label, endEnhancer, ...rest }, id) => (
            <Option
              key={id}
              $selected={id === active}
              $disabled={disabled || false}
              $style={overrides.Option}
              onClick={() => {
                if (!disabled) {
                  setNewValue(id)
                  // Close select(onClickOutside) and trigger onChange if it is animate.
                  // If it's not animate, it triggers onChange separately.
                  animate ? onClickOutside() : onChange(id)
                }
              }}
              {...rest}
              {...sharedProps}
            >
              <OptionLabel $style={overrides.OptionLabel} {...sharedProps}>
                {label}
              </OptionLabel>
              <OptionEndEnhancer>{endEnhancer}</OptionEndEnhancer>
            </Option>
          ))}
        </AnimateOptions>
      </OptionList>
    </Wrap>
  )
}

Select.defaultProps = {
  overrides: {},
  options: [
    {
      label: "apple",
    },
    {
      label: "banana",
    },
  ],
  active: 0,
}
