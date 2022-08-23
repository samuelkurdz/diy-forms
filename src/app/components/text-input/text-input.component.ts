import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface InputInterface {
  label: string;
  placeholder: string;
  formControl: FormControl<string>;
}

@Component({
  selector: 'diy-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent {

  @Input() isFormSubmitted: boolean;
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() FormControl: FormControl<string>;

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }



}
