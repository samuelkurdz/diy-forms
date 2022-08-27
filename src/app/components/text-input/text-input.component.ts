import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { Subject, takeUntil } from 'rxjs';

interface InputInterface {
  label: string;
  placeholder: string;
  formControl: FormControl<string>;
}

@Component({
  selector: 'diy-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements OnInit, OnDestroy {

  @Input() iFormGroup: FormGroup;
  @Input() iFormControlName: string;
  @Input() iId: string | null = null;

  destroy$: Subject<boolean> = new Subject<boolean>();
  formControl: AbstractControl;
  get showError(): boolean {
    return this.formControl.invalid && this.formControl.touched;
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
