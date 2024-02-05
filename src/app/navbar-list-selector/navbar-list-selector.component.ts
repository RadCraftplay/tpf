import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-list-selector',
  standalone: true,
  imports: [],
  templateUrl: './navbar-list-selector.component.html',
  styleUrl: './navbar-list-selector.component.css'
})
export class NavbarListSelectorComponent {
  @Input() name : string = "TODO";
  @Input() icon : string = "../../assets/img/checkbox.svg";

  constructor() {}
}
