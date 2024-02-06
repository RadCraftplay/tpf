import { Component, EventEmitter, Output } from '@angular/core';

import { NavbarHeaderComponent } from '../navbar-header/navbar-header.component';
import { NavbarListSelectorComponent } from '../navbar-list-selector/navbar-list-selector.component';
import { SeparatorComponent } from '../separator/separator.component';
import { AimList, DummyTagList, DummySpannedList } from '../models/aim-list';
import { AimSpan } from '../models/aim';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NavbarListSelectorComponent, NavbarHeaderComponent, SeparatorComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  tagList = new DummyTagList("sample");
  weekList = new DummySpannedList(AimSpan.Week, this.tagList);
  monthList = new DummySpannedList(AimSpan.Month, this.tagList);
  yearList = new DummySpannedList(AimSpan.Year, this.tagList);

  selectedListName = this.tagList.getName()

  @Output() selectedListChanged = new EventEmitter<AimList>;

  onListSelected(list: AimList) {
    this.selectedListName = list.getName()
    this.selectedListChanged.emit(list)
  }
}
