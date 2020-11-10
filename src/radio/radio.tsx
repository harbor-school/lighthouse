import * as React from "react"
import { useContext } from "react"
import { FormContext } from "../helpers/form-provider"
import { ThemeContext } from "../helpers/lighthouse-provider"
import * as System from "../lighthouse"
import { isEmpty } from "../utils/is-empty"
import { Circle, HiddenRadio, RadioContainer, StyledRadio, Wrap } from "./styled-components"
import { RadioPropsT } from "./types"

export const Radio: React.FC<RadioPropsT> = ({
  label,
  checked,
  value,
  name = "",
  required,
  onChange,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const ctx = useContext(FormContext) // States from Form
  let error, ctxValue, ref // get props from form-context
  if (!isEmpty(ctx)) {
    error = ctx.errors[name]
    ctxValue = ctx.watch(name)
    ref = ctx.register({
      required: required ? "required error" : false,
    })
  }
  const isChecked = checked || ctxValue === value // Controlled Input Value or form context Value
  const defaultTransition = {
    ease: theme.animation.easeInCurve,
    duration: theme.animation.timing200,
  }
  const motionProps = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: isChecked ? 1 : 0,
      scale: isChecked ? 1 : 0.5,
    },
    transition: defaultTransition,
  }

  return (
    <Wrap $style={overrides.Wrap}>
      <RadioContainer>
        <HiddenRadio value={value} name={name} ref={ref} type="radio" onChange={onChange} />
        <StyledRadio $error={error} {...sharedProps}>
          <Circle {...sharedProps} {...motionProps} />
        </StyledRadio>
      </RadioContainer>
      <System.ParagraphSmall
        as="span"
        marginLeft={theme.sizing.scale500}
        color={error ? theme.colors.negative : theme.colors.contentPrimary}
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {label}
      </System.ParagraphSmall>
    </Wrap>
  )
}

Radio.defaultProps = {
  name: "my-radio",
  label: "label",
  value: "radio-value",
  overrides: {},
  required: true,
}
