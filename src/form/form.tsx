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
  formBody,
  formFooter,
  onSubmit = (values) => console.log("values from default onSubmit", values),
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
      <FormWrap onSubmit={formProps.handleSubmit(onSubmit)} $style={overrides.FormWrap} {...props}>
        {/* FormBody */}
        <System.FlexBox flexDirection="column" rowGap="scale900">
          {React.Children.map(body, (child, id) => (
            <System.FlexItem key={id}>{child}</System.FlexItem>
          ))}
        </System.FlexBox>
        {/* FormFooter */}
        <FormFooter {...sharedProps}>{formFooter}</FormFooter>
      </FormWrap>
    </FormContext.Provider>
  )
}

Form.defaultProps = {
  onSubmit: (values) => console.log("values from default onSubmit", values),
}
