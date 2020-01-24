export interface FormControlConfig {
  label: string;
  errorMessage: string;
  type?: string;
  id?: string | number;
}

export interface FormValidation {
  [key: string]: boolean | number;
}

export interface FormControl extends FormControlConfig {
  validation: FormValidation;
  valid: boolean;
  touched: boolean;
  value: string;
}