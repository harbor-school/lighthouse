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
  ClearButton,
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
  type = "",
  autoFocus,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const ctx = useContext(FormContext) // States from Form
  let error, ref, value // get props from form-context
  if (!isEmpty(ctx)) {
    error = ctx.errors[name]
    ref = ctx.register({
      required: required ? "required error" : false,
      pattern: {
        value: eval(pattern),
        message: "pattern error",
      },
    })
    value = ctx.watch(name)
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
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          $style={overrides.BaseInput}
          type={type}
          autoFocus={autoFocus}
          {...sharedProps}
        />
        {type === "search" && value && (
          <ClearButton onClick={() => ctx.reset()} {...sharedProps}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "block" }}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </ClearButton>
        )}
      </InputWrapper>
    </Wrap>
  )
}

export default Input

Input.defaultProps = {
  name: "my-input",
  label: "label",
  caption: "",
  placeholder: "placeholder",
  required: true,
}
