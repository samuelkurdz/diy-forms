import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDropdownItem } from '@core';

@Component({
  selector: 'diy-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() showDropdown: boolean;
  @Input() dropdownItems: IDropdownItem[] = [];
  @Output() toggleDropdown = new EventEmitter();

  constructor() { }

}
