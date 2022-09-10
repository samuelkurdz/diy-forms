import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownItem } from '@core';

@Component({
  selector: 'diy-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  showProfileDropdown: boolean;
  isHamBurgerOpen: boolean;
  dropdownOptions: IDropdownItem[] = [
    {
      label: 'Your profile',
      action: () => console.log('settings')
      // action: () => this.router.navigate(['/profile'])
    },
    {
      label: 'Settings',
      action: () => console.log('settings')
    },
    {
      label: 'Sign out',
      action: () => this.router.navigate(['/auth/login'])
    }
  ];

  navLinkItems = [
    {
      label: 'Dashboard',
      link: '/account',
    },
    {
      label: 'Team',
      link: '/profile',
    },
    {
      label: 'Projects',
      link: '/settings',
    },
    {
      label: 'Calendar',
      link: '/calendar',
    }
  ];

  constructor(
    private router: Router
  ) { }

}
