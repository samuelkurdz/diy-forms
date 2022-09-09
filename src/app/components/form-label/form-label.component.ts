import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'diy-form-label',
  standalone: true,
  imports: [CommonModule],
  template: `
		  <label
        [attr.id]="iId"
        [attr.for]="iFor"
        [ngClass]="{
          'invalid': this.formControl.invalid,
          'touched': this.formControl.touched,
          'dirty': this.formControl.dirty
        }"
      >
        {{ iTitle }}
      </label>
  `,
  styleUrls: ['./form-label.component.scss'],
})
export class FormLabelComponent implements OnInit {

  formControl: AbstractControl;
  @Input() iFormGroup: FormGroup;
  @Input() iFormControlName: string;
  @Input() iFor: string | null = null;
  @Input() iId: string;
  @Input() iTitle: string;
  @Input() iWrapClasses: string | null = null;

  get showError(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  ngOnInit() {
    this.formControl = this.iFormGroup.controls[this.iFormControlName];
  }

}
