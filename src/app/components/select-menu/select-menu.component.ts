import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxitem } from '@core';
import { ListboxComponent, ListboxItemComponent } from '../list';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { AriaActiveDescendantModule } from 'src/app/shared/directives';


@Component({
  selector: 'diy-select-menu',
  standalone: true,
  imports: [CommonModule, ListboxComponent, ListboxItemComponent, AriaActiveDescendantModule],
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMenuComponent implements OnInit {

  @Input() iId: string;
  @Input() iLoadingItems: boolean;
  @Input() iPlaceholder: string | undefined = "Select an option";

  @Input() iFormGroup: FormGroup;
  @Input() iFormControlName: string;
  @Input() items: ListBoxitem[] = [];
  @Input() iSelected: ListBoxitem | undefined = undefined;


  formControl: AbstractControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  isListOpen = false;

  get showError(): boolean {
    return this.formControl.invalid && this.formControl.touched && this.formControl.dirty;
  }
  constructor() { }

  ngOnInit() {
    this.formControl = this.iFormGroup.controls[this.iFormControlName];
  }

  select(eve: ListBoxitem) {
    this.iSelected = eve;
    this.closeListBox();
  }

  closeListBox() {
    this.isListOpen = false;
    this.formControl.setValue(this.iSelected?.value || null);
    this.formControl.markAsDirty();
    this.formControl.markAsTouched();
  }

  buttonClick() {
    console.log("button");
  }

  deselectValue(event: MouseEvent) {
    event.stopPropagation();
    this.iSelected = undefined;
    this.formControl.setValue(null);
  }

}
