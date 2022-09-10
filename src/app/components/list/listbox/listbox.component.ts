import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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
	selector: 'diy-listbox',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './listbox.component.html',
	styleUrls: ['./listbox.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListboxComponent implements OnChanges {
	@Input() iId: string;
	@Input() iLabelledBy: string;
	@Input() iTheme: string = "";
	@Input() iOpen: boolean;
	@Input() iLoadingItems: boolean;
	@Input() iMessageLoading: string = "Loading results";
	@Input() iMessageNothingFound: string = "No results found";
	@Input() iListLength: number;
	@Input() iActiveIndex: number;
	/** to show a button instead of text when no items are present */
	@Input() iButtonText: string;
	@Output()
	oButtonClick: EventEmitter<null> = new EventEmitter();
	@ViewChild("listBox", { static: false }) listBox: ElementRef<HTMLUListElement>;

	@HostListener("document:keydown", ["$event"])
	hKeyDown($event: KeyboardEvent) {
		if (!this.iListLength) {
			return;
		}
		switch ($event.keyCode) {
			case Keycode.End:
			case Keycode.Home:
				if (this.iOpen && !this.iLoadingItems) {
					this.appAriaActiveDescendantDirective.setActive(null);
					// browser will not jump to start or end of the page
					$event.preventDefault();
				}
				break;
			case Keycode.ArrowUp:
				if (this.iOpen && !this.iLoadingItems) {
					const nextIndex = this.isActiveDescendantSet()
						? this.appAriaActiveDescendantDirective.getActive() - 1
						: this.iListLength - 1;
					// start from end if at the beginning of the list
					this.appAriaActiveDescendantDirective.setActive(nextIndex < 0 ? this.iListLength - 1 : nextIndex);
					// scroll list item into view if not visible
					const target = this.getActiveListBoxItemElement() as HTMLElement;
					this.listBox.nativeElement.scrollTop = (target.offsetTop - this.listBox.nativeElement.offsetTop) - target.offsetHeight;
					// listbox will not loose focus and browser will not scroll
					$event.preventDefault();
				}
				break;
			case Keycode.ArrowDown:
				if (this.iOpen && !this.iLoadingItems) {
					const nextIndex = this.isActiveDescendantSet()
						? this.appAriaActiveDescendantDirective.getActive() + 1
						: 0;
					// start from top if at the end of the list
					const activeIndex = this.iListLength - 1 >= nextIndex ? nextIndex : 0;
					this.appAriaActiveDescendantDirective.setActive(activeIndex);
					// scroll list item into view if not visible
					const target = this.getActiveListBoxItemElement() as HTMLElement;
					const listBoxHeight = this.listBox.nativeElement.offsetHeight;
					if (target.offsetTop + target.offsetHeight >= listBoxHeight || activeIndex === 0) {
						// this.listBox.nativeElement.scrollTop = target.offsetTop;
						this.listBox.nativeElement.scrollTop = (target.offsetTop - this.listBox.nativeElement.offsetTop) - target.offsetHeight;
					}
					// browser will not set cursor to the end of input
					$event.preventDefault();
				}
				break;
		}
	}

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private appAriaActiveDescendantDirective: AriaActiveDescendantDirective,
	) { }

	ngOnChanges(changes: SimpleChanges) {
		if ((changes['iOpen'] && !this.iOpen) || changes['iListLength']) {
			this.appAriaActiveDescendantDirective.setActive(null);
		}
		if ((changes['iActiveIndex'] || changes['iListLength']) && !this.isActiveDescendantSet()) {
			this.appAriaActiveDescendantDirective.setActive(this.iActiveIndex);
		}
	}

	private isActiveDescendantSet() {
		const activeDescendant = this.appAriaActiveDescendantDirective.getActive();
		// note: cannot use `value >= 0` because null will be converted to 0 and the condition will be truthy
		return activeDescendant > 0 || activeDescendant === 0;
	}

	private getActiveListBoxItemElement() {
		const listboxItems = this.document.querySelectorAll(
			`[data-listbox-item="${this.appAriaActiveDescendantDirective.getActive()}"]`,
		);
		return listboxItems && listboxItems.length > 0 ? listboxItems[0] : null;
	}
}
