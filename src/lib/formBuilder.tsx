import * as _ from 'lodash'
import { FormControlConfig, FormValidation, FormControl } from "../interfaces/Form"
const is = require('is_js');

export const formBuilder = {
  createControl: (config: FormControlConfig, validation?: FormValidation): FormControl => {
    return {
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: ''
    }
  },
  validate: (value: string, validation?: FormValidation): boolean => {
    if (!validation) {
      return true;
    }
  
    let isValid = true;

    if (_.isString(value)) {
      if (validation.required) {
        isValid = !!value.trim() && isValid;
      }
  
      if (validation.email) {
        isValid = is.email(value) && isValid
      }
  
      if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
      }
    }
  
  
    return isValid;
  },
  validateForm: (formControls: {[key: string]: FormControl}): boolean => {
    let isFormValid = true;

    _.forEach(formControls, (control) => {
      if (control.type === 'group') {
        _.forEach(control.groups, group => {
          _.forEach(group, groupControl => {
            isFormValid = groupControl.valid && isFormValid
          })
        })
      } else {
        isFormValid = control.valid && isFormValid
      }
    })
  
    return isFormValid;
  },
  getErrorMessage({ value, label, validation }: { value: string, label: string, validation?: FormValidation }): string {
    if (!validation) {
      return '';
    }
  
    let errorMessage = `Enter correct ${label}`;

    if (!value) {
      if (validation.required) {
        errorMessage = `${label} is required`
      }
    } else {
      if (validation.email) {
        errorMessage = `Email is incorrect`
      }
  
      if (validation.minLength && _.isString(value)) {
        errorMessage = `You entered ${value.length} characters. Minimum should be ${validation.minLength}`
      }
    }
  
    return errorMessage;
  }
}