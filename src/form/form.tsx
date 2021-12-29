import * as React from "react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FormContext } from "../helpers/form-provider"
import { ThemeContext } from "../helpers/lighthouse-provider"
import * as System from "../lighthouse"
import { isReactFragment } from "../utils/is-fragment"
import { FormFooter, FormWrap } from "./styled-components"
import { FormPropsT } from "./types"

export const Form: React.FC<FormPropsT> = ({
  rowGap,
  formBody,
  formFooter,
  onSubmit = (values) => console.log("values from default onSubmit", values),
  onReset,
  autoComplete,
  overrides = {},
  ...props
}) => {
  const theme = useContext(ThemeContext)
  const formProps = useForm({
    mode: "onBlur",
  })
  const sharedProps = { $theme: theme, $errors: formProps.errors }
  const body =
    React.isValidElement(formBody) && isReactFragment(formBody) ? formBody.props.children : formBody

  return (
    <FormContext.Provider value={formProps}>
      <FormWrap
        onSubmit={formProps.handleSubmit((values, event) =>
          onSubmit({ ...values, reset: formProps.reset }, event)
        )}
        onReset={onReset}
        $style={overrides.FormWrap}
        autoComplete={autoComplete}
        {...props}
      >
        {/* FormBody */}
        <System.FlexBox flexDirection="column" rowGap={rowGap}>
          {React.Children.map(body, (child, id) => (
            <System.FlexItem key={id}>{child}</System.FlexItem>
          ))}
        </System.FlexBox>
        {/* FormFooter */}
        <FormFooter $style={overrides.FormFooter} {...sharedProps}>
          {formFooter}
        </FormFooter>
      </FormWrap>
    </FormContext.Provider>
  )
}

Form.defaultProps = {
  rowGap: "scale900",
  onSubmit: (values) => console.log("values from default onSubmit", values),
}
