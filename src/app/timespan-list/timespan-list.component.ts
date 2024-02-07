import { Component, Input, OnInit } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimGroupComponent } from '../aim-group/aim-group.component';
import { TimespannedList } from '../models/aim-list';
import { GroupedAims } from '../models/ui';
import { AimSpan } from '../models/aim';

@Component({
  selector: 'app-timespan-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimGroupComponent ],
  templateUrl: './timespan-list.component.html',
  styleUrl: './timespan-list.component.css'
})
export class TimespanListComponent implements OnInit {
  @Input() aimSource : TimespannedList | undefined;
  groups : GroupedAims[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.groups = [
      new GroupedAims([
      {
        id: "1",
        name: "Przykładowe zadanie",
        owner: "radcraftplay2@gmail.com",
        priority: 1,
        description: "Opis zadania",
        done: false,
        tags: [ "przyklad" ],
        year: 2024,
        spanType: 1,
        spanValue: 1
    }], 2024, AimSpan.Month, 2)
    ]
  }
}
