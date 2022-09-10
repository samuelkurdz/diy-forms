import { ListBoxitem } from ".";

export type IFormData = {
  formName?: string;
  controls: IFormControl[];
  formValidators?: FormValidators;
}

export type FormValidators = {
  passwordMatch: true,
}

export type IFormControl = {
  name: string;
  label: string;
  placeholder?: string;
  validators: IFormValidators;
} & IControlType;

export type IControlType = IGeneralType | ISelectMenuType;

export type IGeneralType = {
  value: string;
  type: "email" | "password" | "text" | "number";
}
export type ISelectMenuType = {
  type: "select-menu";
  value?: ListBoxitem;
  options: ListBoxitem[];
}

export type IFormValidators = {
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
