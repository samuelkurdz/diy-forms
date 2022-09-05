import { ListBoxitem } from ".";

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
  type: "email" | "password" | "text" | "number" | "dropdown";
  validators: IFormValidators;
  options?: ListBoxitem[];
}

// export interface IDropdownFormControl extends IFormControl {
//   type: "dropdown";
//   options: ListBoxitem[];
// }

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
