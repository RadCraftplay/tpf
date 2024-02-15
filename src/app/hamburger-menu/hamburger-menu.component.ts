import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
  @Input() sourceName = "";
  @Output() click = new EventEmitter<string>;

  emitEvent() {
    this.click.emit(this.sourceName);
  }
}
