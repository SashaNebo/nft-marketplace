import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

type INPUT_ADDITIONAL = {
  leftIcon?: string
  rightIcon?: string
  showPassword?: () => void
  errorMessage:  string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
  register?: UseFormRegisterReturn<string>
}

export type INPUT = INPUT_ADDITIONAL & InputHTMLAttributes<HTMLInputElement>