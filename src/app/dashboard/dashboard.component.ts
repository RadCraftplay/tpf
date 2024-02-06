import { Component, Input, OnInit } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { SeparatorVerticalComponent } from '../separator-vertical/separator-vertical.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AimList, DummyTagList } from '../models/aim-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent, SeparatorVerticalComponent, TagListComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedList : AimList = new DummyTagList("sample");

  onSelectedListChanged(list: AimList) {
    this.selectedList = list;
  }
}
