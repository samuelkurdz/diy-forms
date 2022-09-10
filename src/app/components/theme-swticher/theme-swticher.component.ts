import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'diy-theme-swticher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-swticher.component.html',
  styleUrls: ['./theme-swticher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwticherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
