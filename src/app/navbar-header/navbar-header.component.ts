import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  standalone: true,
  imports: [],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {
  @Input() name : string = "TODO";

  constructor() {}
}
