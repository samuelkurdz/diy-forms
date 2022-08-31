import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxComponent } from '../listbox/listbox.component';
import { ListBoxitem } from '@core';

@Component({
  selector: 'diy-dropdown',
  standalone: true,
  imports: [CommonModule, ListboxComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() iPlaceholder: string = "Select an option";
  isListOpen = true;
  selectedItem: ListBoxitem | undefined = undefined;
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


}
