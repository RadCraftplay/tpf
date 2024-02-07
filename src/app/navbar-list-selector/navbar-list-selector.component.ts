import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AimList } from '../models/aim-list';

@Component({
  selector: 'app-navbar-list-selector',
  standalone: true,
  imports: [],
  templateUrl: './navbar-list-selector.component.html',
  styleUrl: './navbar-list-selector.component.css'
})
export class NavbarListSelectorComponent {
  @Input() icon : string = "../../assets/img/checkbox.svg";
  @Input() list : AimList | undefined;
  @Input() selectedName : string = "";

  constructor() {}

  isSelected(): boolean {
    return this.selectedName === this.list!.getName()
  }

  @Output() listSelected = new EventEmitter<AimList>;
}
