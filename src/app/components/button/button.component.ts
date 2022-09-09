import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonSizeData, FormButtonStateData, FormButtonStyleData, FormButtonThemeData, FormButtonTypeData } from '@core';
import { Params, RouterModule } from '@angular/router';

@Component({
  selector: 'diy-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() iDisabled = false;
  @Input() iType: FormButtonTypeData = "button";

  @Input() iFull: boolean = false;
  @Input() iThemeColor: FormButtonThemeData;
  @Input() iSize: FormButtonSizeData = "medium";
  @Input() iState: FormButtonStateData = "default";
  @Input() iStyle: FormButtonStyleData = "contained";
  
  @Input() iTarget = "_self";
  @Input() iRouterLink: string;
  @Input() iLink: string | any[];
  @Input() iPreserveFragment: boolean;
  @Input() iQueryParams: Params | null;

  @Input() iId = null;
  @Input() iIconLeft = null;
  @Input() iAriaLabel = null;
  @Input() iShowSpinner: boolean;

  @Output() oBlur = new EventEmitter();
  @Output() oFocus = new EventEmitter();
  @Output() oClick = new EventEmitter();
  @Output() oMouseOut = new EventEmitter();
  @Output() oMouseOver = new EventEmitter();

}
