import { SubmitHandler } from "react-hook-form"
import { StyleObject } from "styletron-react"
import sizing from "../themes/shared/sizing"

export type FormPropsT = {
  rowGap?: keyof typeof sizing
  formBody?: React.ReactNode
  formFooter?: React.ReactNode
  onSubmit?: SubmitHandler<Record<string, any>>
  overrides?: { FormWrap?: StyleObject; FormFooter?: StyleObject }
}
