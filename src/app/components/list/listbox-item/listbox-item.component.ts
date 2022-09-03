import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxitem } from '@core';
import { AriaActiveDescendantDirective } from '@shared';

enum Keycode {
  "Delete" = 8,
  "Enter" = 13,
  "Shift" = 16,
  "Escape" = 27,
  "End" = 35,
  "Home" = 36,
  "ArrowUp" = 38,
  "ArrowDown" = 40,
  "Two" = 50,
}

@Component({
  selector: 'diy-listbox-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listbox-item.component.html',
  styleUrls: ['./listbox-item.component.scss']
})
export class ListboxItemComponent implements OnInit, OnChanges {
  @Input() iCustomTemplate: boolean;
  @Input() iItem: ListBoxitem;
  @Input() iIndex: number;
  @Input() iActiveIndex: number;
  @Input() iIsSelected: boolean;
  @Output() oSelect: EventEmitter<ListBoxitem | any> = new EventEmitter();
  @ViewChild("listBoxItem", { static: true }) listBoxItem: ElementRef;

  @HostBinding("class.selected") isActive: boolean = false;

  @HostListener("document:keydown", ["$event"]) hKeyDown($event: KeyboardEvent) {
    switch ($event.keyCode) {
      case Keycode.Enter:
        if (this.appAriaActiveDescendantDirective.getActive() === this.iIndex) {
          this.select();
        }
        break;
      case Keycode.ArrowUp:
      case Keycode.ArrowDown:
        // do not overwrite selected items
        if (!this.iIsSelected) {
          this.isActive = this.appAriaActiveDescendantDirective.getActive() === this.iIndex;
        }
        break;
    }
  }

  constructor(private appAriaActiveDescendantDirective: AriaActiveDescendantDirective) { }

  ngOnInit() {
    if (this.iActiveIndex === this.iIndex) {
      this.isActive = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // make sure selection works if listbox does not get destroyed and rerendered on every selection
    if (changes['iIsSelected']) {
      this.isActive = this.iIsSelected;
    }
  }

  select() {
    this.oSelect.emit(this.iItem);
  }
}