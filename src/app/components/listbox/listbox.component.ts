import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxitem } from '@core';

@Component({
  selector: 'diy-listbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListboxComponent implements AfterViewInit {

  @ViewChild('listBoxContainer') listBoxContainer: ElementRef<HTMLUListElement>;

  @Input() iListItems: ListBoxitem[] = [];
  @Input() selectedItem: ListBoxitem | undefined = undefined;

  @Input() iOpen: boolean;
  @Input() iLoadingItems: boolean = false;
  @Input() iMessageLoading: string = "Loading results";
  @Input() iMessageNothingFound: string = "No results found";

  @Output() oItemSelect = new EventEmitter<ListBoxitem>();
  @Output() oCloseList = new EventEmitter();

  constructor() { }


  ngAfterViewInit(): void {
    if (this.iOpen) {
      const selectedItem = this.findSelectedItem(this.listBoxContainer.nativeElement.children, 'selected');
      if (selectedItem !== undefined) {
        this.listBoxContainer.nativeElement.children.item(
          selectedItem - 1 < 0 ? 0 : selectedItem - 1
        )?.scrollIntoView({ behavior: 'auto' });
      }
    }
  }

  @HostListener("document:keydown", ["$event"]) hKeyDown($event: KeyboardEvent) {
    if (!this.iListItems.length || !this.iOpen) return;

    const listItems = this.listBoxContainer.nativeElement.children;
    const selectedItem = this.findSelectedItem(listItems, 'selected');
    const keyboardSelectedItem = this.findSelectedItem(listItems, 'key-selected');

    if ($event.key === 'Enter') {
      if (keyboardSelectedItem !== undefined) {
        this.oItemSelect.emit(this.iListItems[keyboardSelectedItem]);
        this.oCloseList.emit();
      }
    }

    if ($event.key === 'Escape') {
      this.oCloseList.emit();
    }

    if ($event.key === 'ArrowUp') {
      this.selectPreviousItem(selectedItem, keyboardSelectedItem);
      if (keyboardSelectedItem !== undefined) {
        this.scrollToItem(keyboardSelectedItem - 1 < 0 ? this.iListItems.length - 1 : keyboardSelectedItem - 1);
      }
    }

    if ($event.key === 'ArrowDown') {
      this.selectNextItem(selectedItem, keyboardSelectedItem);
      if (keyboardSelectedItem !== undefined) {
        this.scrollToItem(keyboardSelectedItem + 1 > this.iListItems.length - 1 ? 0 : keyboardSelectedItem + 1);
      }
    }

  }

  scrollToItem(index: number) {
    this.listBoxContainer.nativeElement.children.item(index)?.scrollIntoView({ behavior: 'auto' });
    // const item = this.listBoxContainer.nativeElement.children.item(index) as HTMLElement;
    // item.focus();
  }

  findSelectedItem(listItems: HTMLCollection, searchClass: "selected" | "key-selected"): number | undefined {
    let selectedItemIndex: number | undefined = undefined;
    Array.from(listItems).forEach((element, index) => {
      if (element.classList.contains(searchClass)) {
        selectedItemIndex = index;
      }
    });
    return selectedItemIndex;
  }

  selectPreviousItem(selectedItem: number | undefined, keyboardSelectedItem: number | undefined) {

    if (selectedItem === undefined && keyboardSelectedItem === undefined) {
      this.selectItem(this.iListItems.length - 1);
      return;
    }

    if (selectedItem === undefined && keyboardSelectedItem !== undefined) {
      this.deselectItem(keyboardSelectedItem);
      this.selectItem(keyboardSelectedItem - 1 < 0 ? this.iListItems.length - 1 : keyboardSelectedItem - 1);
      return;
    }

    if (selectedItem !== undefined && keyboardSelectedItem === undefined) {
      this.deselectItem(selectedItem);
      this.selectItem(selectedItem - 1 < 0 ? this.iListItems.length - 1 : selectedItem - 1);
      return;
    }

    if (selectedItem !== undefined && keyboardSelectedItem !== undefined) {
      this.deselectItem(selectedItem);
      this.deselectItem(keyboardSelectedItem);
      this.selectItem(keyboardSelectedItem - 1 < 0 ? this.iListItems.length - 1 : keyboardSelectedItem - 1);
      return;
    }
  }

  selectNextItem(selectedItem: number | undefined, keyboardSelectedItem: number | undefined) {

    if (keyboardSelectedItem === undefined && selectedItem === undefined) {
      this.selectItem(0);
      return;
    }

    if (keyboardSelectedItem === undefined && selectedItem !== undefined) {
      this.deselectItem(selectedItem);
      this.selectItem(selectedItem + 1 > this.iListItems.length - 1 ? 0 : selectedItem + 1);
      return;
    }

    if (keyboardSelectedItem !== undefined && selectedItem === undefined) {
      this.deselectItem(keyboardSelectedItem);
      this.selectItem(keyboardSelectedItem + 1 > this.iListItems.length - 1 ? 0 : keyboardSelectedItem + 1);
      return;
    }

    if (keyboardSelectedItem !== undefined && selectedItem !== undefined) {
      this.deselectItem(selectedItem);
      this.deselectItem(keyboardSelectedItem);
      this.selectItem(keyboardSelectedItem + 1 > this.iListItems.length - 1 ? 0 : keyboardSelectedItem + 1);
      return;
    }
  }

  deselectItem(index: number) {
    this.listBoxContainer.nativeElement.children.item(index)?.classList.remove('key-selected');
  }
  selectItem(index: number) {
    this.listBoxContainer.nativeElement.children.item(index)?.classList.add('key-selected');
  }

}
