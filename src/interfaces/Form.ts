import { InputType } from './../constants/Form';

export interface FormControlConfig {
  label: string;
  type?: InputType;
  groups?: FormControlCollection[];
  id?: string | number;
}

export interface FormValidation {
  required?: boolean;
  minLength?: number;
  email?: boolean;
}

export interface FormControl extends FormControlConfig {
  validation?: FormValidation;
  errorMessage?: string;
  valid: boolean;
  touched: boolean;
  value: string;
  groups?: FormControlCollection[];
}

export interface FormGroup {
  label: string;
  type: string;
  groups?: FormControlCollection[];
}

export interface FormControlCollection {
  [key: string]: FormControl
}