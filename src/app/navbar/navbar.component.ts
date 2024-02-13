import { Component, EventEmitter, Output } from '@angular/core';

import { NavbarHeaderComponent } from '../navbar-header/navbar-header.component';
import { NavbarListSelectorComponent } from '../navbar-list-selector/navbar-list-selector.component';
import { SeparatorComponent } from '../separator/separator.component';
import { AimList, EmptyList, TimespannedList } from '../models/aim-list';
import { AimSpan } from '../models/aim';
import { TasksService } from '../services/tasks-service/tasks-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NavbarListSelectorComponent, NavbarHeaderComponent, SeparatorComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  tagLists: AimList[] = []
  weekList: AimList = new EmptyList("Tygodnie")
  monthList: AimList = new EmptyList("Miesiące")
  yearList: AimList = new EmptyList("Lata")

  selectedListName = this.weekList.getName()

  @Output() selectedListChanged = new EventEmitter<AimList>;

  constructor(tasksService: TasksService) {
    this.weekList = new TimespannedList(AimSpan.Week, tasksService)
    this.monthList = new TimespannedList(AimSpan.Month, tasksService)
    this.yearList = new TimespannedList(AimSpan.Year, tasksService)
  }

  onListSelected(list: AimList) {
    this.selectedListName = list.getName()
    this.selectedListChanged.emit(list)
  }
}
