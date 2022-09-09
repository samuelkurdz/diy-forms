import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { Subject, takeUntil } from 'rxjs';
import { IFormControl } from '@core';


@Component({
  selector: 'diy-form-input[iFormGroup][iFormControlName]',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit, OnDestroy {

  @Input() iFormGroup: FormGroup;
  @Input() iFormControlName: string;

  @Input() iDisabled = false;
  @Input() iId: string | undefined = undefined;
  @Input() iType: IFormControl["type"] = "text";
  @Input() iPlaceholder: string | undefined = undefined;

  formControl: AbstractControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  get showError(): boolean {
    return this.formControl.invalid && this.formControl.touched && this.formControl.dirty;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formControl = this.iFormGroup.controls[this.iFormControlName];

    // without manual change detection, the error component will not know about errors
    this.formControl.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => this.changeDetectorRef.detectChanges()
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
