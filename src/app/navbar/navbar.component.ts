import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { NavbarHeaderComponent } from '../navbar-header/navbar-header.component';
import { NavbarListSelectorComponent } from '../navbar-list-selector/navbar-list-selector.component';
import { SeparatorComponent } from '../separator/separator.component';
import { AimList, EmptyList, TimespannedList } from '../models/aim-list';
import { AimSpan } from '../models/aim';
import { TasksService } from '../services/tasks-service/tasks-service';
import { Observable, Subscription, of } from 'rxjs';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NavbarListSelectorComponent, NavbarHeaderComponent, SeparatorComponent, HamburgerMenuComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  tagLists: AimList[] = []
  monthList: AimList = new EmptyList("Miesiące")
  yearList: AimList = new EmptyList("Lata")

  selectedListName = this.monthList.getName()

  private dashboardInitSubscription: Subscription = new Subscription();
  @Input() dashboardInit: Observable<void>;

  @Output() selectedListChanged = new EventEmitter<AimList>;
  @Output() hamburgerClicked = new EventEmitter<void>;

  constructor(tasksService: TasksService) {
    this.monthList = new TimespannedList(AimSpan.Month, tasksService)
    this.yearList = new TimespannedList(AimSpan.Year, tasksService)
    this.dashboardInit = of();
  }

  onListSelected(list: AimList) {
    this.selectedListName = list.getName()
    this.selectedListChanged.emit(list)
  }

  ngOnInit(){
    this.dashboardInitSubscription = this.dashboardInit.subscribe(() => this.onListSelected(this.monthList));
  }
  
  ngOnDestroy() {
    this.dashboardInitSubscription.unsubscribe();
  }

  checkClick(source: string) {
    if (source == "navbar") {
      this.hamburgerClicked.emit()
    }
  }
}
