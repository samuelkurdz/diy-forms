import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'diy-form-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorComponent {

  error: string | null = null;
  errorData: Record<string, any> = {};

  @Input()
  set iErrors(errors: ValidationErrors | null) {
    this.getFirstError(errors);
  };
  @Input() iValid: boolean;
  @Input() iTouched: boolean;
  @Input() iDirty: boolean;
  /* 
    iPrintErrorsByDefault disclaimer
    design system forms normally show errors only after user interacted with the form control
    only exception so far - the date picker, the less exeptions the better - keeps the UI predictable for the user
  */
  @Input() iPrintErrorsByDefault: boolean = false;
  @Input() iId: string | null = null;

  getFirstError(errors: ValidationErrors | null) {
    this.error = null;
    this.errorData = {};
    if (errors && Object.keys(errors).length > 0) {
      this.error = Object.keys(errors)[0];
      this.errorData = errors[this.error];
    }
  }
}
