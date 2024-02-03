import { Component } from '@angular/core';

import { NavbarHeaderComponent } from '../navbar-header/navbar-header.component';
import { NavbarListSelectorComponent } from '../navbar-list-selector/navbar-list-selector.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NavbarListSelectorComponent, NavbarHeaderComponent, SeparatorComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  parentAction() {
    console.log('Hello');
  }
}
