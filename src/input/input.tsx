import * as React from "react"
import { useContext, useState } from "react"
import { FormContext } from "../helpers/form-provider"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { isEmpty } from "../utils/is-empty"
import {
  BaseInput,
  Caption,
  FocusBar,
  InputWrapper,
  LabelText,
  LableWrap,
  Wrap,
} from "./styled-components"
import { InputPropsT } from "./types"

export const Input: React.FC<InputPropsT> = ({
  label,
  caption,
  placeholder,
  defaultValue,
  name = "",
  required,
  pattern = "",
  onChange,
  onBlur,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const ctx = useContext(FormContext) // States from Form
  let error, ref // get props from form-context
  if (!isEmpty(ctx)) {
    error = ctx.errors[name]
    ref = ctx.register({
      required: required ? "required error" : false,
      pattern: {
        value: eval(pattern),
        message: "pattern error",
      },
    })
  }
  const [focus, setFocus] = useState(false)
  const sharedProps = { $theme: theme, $error: error }
  const motionProps = {
    variants: {
      active: {
        x: 0,
      },
      normal: {
        x: -10,
      },
    },
    initial: "normal",
    animate: focus ? "active" : "normal",
    transition: {
      duration: theme.animation.timing200,
      ease: theme.animation.easeInCurve,
    },
  }
  const captionText = error ? error.message : caption

  return (
    <Wrap onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} $style={overrides.Wrap}>
      <LableWrap>
        {label && (
          <LabelText $style={overrides.LabelText} {...sharedProps}>
            {label}
          </LabelText>
        )}
        {captionText && (
          <Caption $style={overrides.Caption} {...sharedProps}>
            {captionText}
          </Caption>
        )}
      </LableWrap>
      <InputWrapper $haveMargin={label || captionText} {...sharedProps}>
        <FocusBar $style={overrides.FocusBar} {...sharedProps} {...motionProps} />
        <BaseInput
          name={name}
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          $style={overrides.BaseInput}
          {...sharedProps}
        />
      </InputWrapper>
    </Wrap>
  )
}

export default Input

Input.defaultProps = {
  name: "my-input",
  label: "label",
  caption: "caption",
  placeholder: "placeholder",
  required: true,
}
