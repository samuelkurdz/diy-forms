import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'diy-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor() { }

}
