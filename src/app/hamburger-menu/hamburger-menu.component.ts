import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
  @Output() click = new EventEmitter<void>;
}
