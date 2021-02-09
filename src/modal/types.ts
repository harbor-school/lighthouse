import { FieldErrors, SubmitHandler } from "react-hook-form"
import { StyleObject } from "styletron-react"
import { ROLE } from "./constants"

export type ModalOverridesT = {
  Wrap?: StyleObject
  Loading?: StyleObject
  ModalHeader?: StyleObject
  Title?: StyleObject
  ModalBody?: StyleObject
  Description?: StyleObject
  ModalFooter?: StyleObject
}

export interface ModalContentPropsT extends ModalPropsT {
  $errors?: FieldErrors
}

export interface ModalPropsT {
  title?: string | React.ReactNode
  desc?: string | React.ReactNode
  children?: React.ReactNode
  confirmText?: string
  cancelText?: string
  isOpen?: boolean
  loading?: boolean
  loadingSpinner?: React.ReactNode
  role?: keyof typeof ROLE
  closeOnClick?: (event: React.MouseEvent<HTMLElement>) => void
  confirmOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSubmit?: SubmitHandler<Record<string, any>>
  overrides?: ModalOverridesT
}
