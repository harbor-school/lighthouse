import { SubmitHandler } from "react-hook-form"
import { StyleObject } from "styletron-react"

export type FormPropsT = {
  formBody?: React.ReactNode
  formFooter?: React.ReactNode
  onSubmit?: SubmitHandler<Record<string, any>>
  overrides?: { FormWrap?: StyleObject }
}
