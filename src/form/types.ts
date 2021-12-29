import { SubmitHandler } from "react-hook-form"
import { StyleObject } from "styletron-react"
import sizing from "../themes/shared/sizing"

export type FormPropsT = {
  rowGap?: keyof typeof sizing | string
  formBody?: React.ReactNode
  formFooter?: React.ReactNode
  onSubmit?: SubmitHandler<Record<string, any>>
  onReset?: (event: any) => void
  autoComplete?: string
  overrides?: { FormWrap?: StyleObject; FormFooter?: StyleObject }
}
