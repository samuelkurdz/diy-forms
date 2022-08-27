import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export const passwordMatchesValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password && confirmPassword && password === confirmPassword ? null : { 'passwordMismatch': true }
}



export function matchingControlsValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const control = formControl.get(controlName)?.value;
    const matchingControl = formControl.get(matchingControlName)?.value;
    return control && matchingControl && control === matchingControl ? null : { 'passwordMismatch': true }
  }
}
