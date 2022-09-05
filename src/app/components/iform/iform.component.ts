import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IFormControl, IFormData, matchingControlsValidator } from '@core';
import { FormInputComponent } from '../text-input/text-input.component';
import { FormLabelComponent } from '../form-label/form-label.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'diy-iform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormInputComponent, DropdownComponent, FormLabelComponent],
  templateUrl: './iform.component.html',
  styleUrls: ['./iform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IformComponent implements OnChanges {
  @Input() iFormData: IFormData;
  @Output() isIFormValid = new EventEmitter<boolean>();
  @Output() oFormSubmit = new EventEmitter<Record<string, any>>();

  isFormReady: boolean;
  public iFormGroup: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['iFormData'].currentValue) {
      this.createForm(this.iFormData.controls);
    }
  }

  createForm(controls: IFormControl[]) {
    for (const control of controls) {
      const validatorsToAdd = this.processControlValidators(control);
      this.iFormGroup.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    };

    this.processFormGroupValidators();

    this.isFormReady = true;
  }

  private processFormGroupValidators() {
    if (this.iFormData.formValidators && this.iFormData.formValidators['passwordMatch']) {
      this.iFormGroup.addValidators(matchingControlsValidator('password', 'confirmPassword'));
      this.iFormGroup.updateValueAndValidity();
    }
  }

  private processControlValidators(control: IFormControl): ValidatorFn[] {
    const validatorsToAdd = [];
    for (const [key, value] of Object.entries(control.validators)) {
      switch (key) {
        case 'min':
          validatorsToAdd.push(Validators.min(value));
          break;
        case 'max':
          validatorsToAdd.push(Validators.max(value));
          break;
        case 'required':
          if (value) {
            validatorsToAdd.push(Validators.required);
          }
          break;
        case 'requiredTrue':
          if (value) {
            validatorsToAdd.push(Validators.requiredTrue);
          }
          break;
        case 'email':
          if (value) {
            validatorsToAdd.push(Validators.email);
          }
          break;
        case 'minLength':
          validatorsToAdd.push(Validators.minLength(value));
          break;
        case 'maxLength':
          validatorsToAdd.push(Validators.maxLength(value));
          break;
        case 'pattern':
          validatorsToAdd.push(Validators.pattern(value));
          break;
        case 'nullValidator':
          if (value) {
            validatorsToAdd.push(Validators.nullValidator);
          }
          break;
        default:
          break;
      }
    };
    return validatorsToAdd;
  }

  onSubmit() {
    this.isIFormValid.emit(this.iFormGroup.valid);
    this.oFormSubmit.emit(this.iFormGroup.value);
  }
}
