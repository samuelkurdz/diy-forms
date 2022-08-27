import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'diy-form-label',
  standalone: true,
  imports: [CommonModule],
  template: `
		<div>
			<label [attr.id]="iId" [attr.for]="iFor">
        {{ iTitle }}
      </label>
		</div>
  `,
  styleUrls: ['./form-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLabelComponent implements OnInit {

  formControl: AbstractControl;
  @Input() iFormGroup: FormGroup;
  @Input() iFormControlName: string;
  @Input() iFor: string | null = null;
  @Input() iId: string;
  @Input() iTitle: string;
  @Input() iWrapClasses: string | null = null;

  ngOnInit() {
    this.formControl = this.iFormGroup.controls[this.iFormControlName];
  }

}
