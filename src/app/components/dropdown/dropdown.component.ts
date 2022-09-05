import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxitem } from '@core';
import { SharedModule } from '@shared';
import { ListboxComponent, ListboxItemComponent } from '../list';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'diy-dropdown',
  standalone: true,
  imports: [CommonModule, ListboxComponent, ListboxItemComponent, SharedModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  @Input() iId: string;
  @Input() iLoadingItems: boolean;
  @Input() iPlaceholder: string = "Select an option";

  @Input() iFormGroup: FormGroup;
	@Input() iFormControlName: string;
	@Input() items: ListBoxitem[] = [];
	@Input() iSelected: ListBoxitem | undefined = undefined;


  formControl: AbstractControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  isListOpen = false;


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
	}

  buttonClick() {
    console.log("button");
  }

}
