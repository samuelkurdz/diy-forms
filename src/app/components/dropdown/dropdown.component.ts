import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxitem } from '@core';
import { SharedModule } from '@shared';
import { ListboxComponent, ListboxItemComponent } from '../list';


@Component({
  selector: 'diy-dropdown',
  standalone: true,
  imports: [CommonModule, ListboxComponent, ListboxItemComponent, SharedModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() iId: string;
  @Input() iLoadingItems: boolean;
  @Input() iPlaceholder: string = "Select an option";

  isListOpen = false;
  iSelected: ListBoxitem = { value: '1', label: 'One' };
  items: ListBoxitem[] = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
    { value: '7', label: 'Seven' },
    { value: '8', label: 'Eight' },
    { value: '9', label: 'Nine' },
  ];


  constructor() { }

  select(eve: any) {
    this.iSelected = eve;
  }

}
