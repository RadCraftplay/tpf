import { Component, Input, OnInit } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { SeparatorVerticalComponent } from '../separator-vertical/separator-vertical.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AimList, EmptyList, ListType, TimespannedList } from '../models/aim-list';
import { TimespanListComponent } from '../timespan-list/timespan-list.component';
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent, SeparatorVerticalComponent, TagListComponent, TimespanListComponent, NgIf ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedList : AimList = new EmptyList("Miesiące");
  dashboardInitSubject: Subject<void> = new Subject<void>();

  public get listAsTimespanned() : TimespannedList {
    return this.selectedList as TimespannedList
  }

  public readonly TAG = ListType.Tag;

  onSelectedListChanged(list: AimList) {
    this.selectedList = list;
  }

  ngOnInit(): void {
    // Workarround to fix default list not loading
    setTimeout(() => {
      this.dashboardInitSubject.next();
    }, 25);
    setTimeout(() => {
      this.dashboardInitSubject.next();
    }, 50);
  }

  hamburgerToggle() {
    console.log("click!");
  }
}
