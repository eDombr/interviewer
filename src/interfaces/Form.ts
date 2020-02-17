import { InputType } from './../constants/Form'

export interface FormControlConfig {
  label: string
  type?: InputType
  groups?: FormControlCollection[]
  id?: string | number
}

export interface FormValidation {
  required?: boolean
  minLength?: number
  email?: boolean
}

export interface FormControl extends FormControlConfig {
  validation?: FormValidation
  errorMessage?: string
  valid: boolean
  touched: boolean
  value: string
}

export interface FormControlCollection {
  [key: string]: FormControl
}