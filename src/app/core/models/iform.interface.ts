export interface IFormData {
  controls: IFormControl[];
  formValidators?: FormValidators;
}

export interface FormValidators {
  passwordMatch: true,
}

export interface IFormControl {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "number";
  validators: IFormValidators;
  // options?: IFormControlOptions;
}

export interface IFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}

// export interface IFormControlOptions {
//   min?: string;
//   max?: string;
//   step?: string;
//   icon?: string;
// }
