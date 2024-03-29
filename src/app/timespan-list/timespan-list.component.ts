import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimGroupComponent } from '../aim-group/aim-group.component';
import { TimespannedList } from '../models/aim-list';
import { GroupedAims } from '../models/ui';
import { Aim, AimSpan } from '../models/aim';
import { groupBy } from '../common';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-timespan-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimGroupComponent, HamburgerMenuComponent ],
  templateUrl: './timespan-list.component.html',
  styleUrl: './timespan-list.component.css'
})
export class TimespanListComponent implements OnInit, OnChanges {
  @Input() aimSource : TimespannedList | undefined;
  groups : GroupedAims[] | undefined;

  @Output() hamburgerClicked = new EventEmitter<void>;

  constructor() {}

  updateSources() {
    this.aimSource?.getAims().subscribe(data =>
      this.groups = this.mapToGroups(
        groupBy(
          data,
          (aim) => [aim.year, aim.spanValue]
        )
      )
    )
  }

  ngOnInit(): void {
    this.updateSources()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateSources()
  }

  mapToGroups(map: Map<[number, number], Aim[]>) : GroupedAims[] {
    let groups : GroupedAims[] = []
    map.forEach((aims, [year, spanValue]) => {
      groups.push(new GroupedAims(
        aims,
        year,
        this.aimSource?.timeSpan || AimSpan.Year,
        spanValue
      ))
    })

    return groups;
  }

  checkClick(source: string) {
    if (source == "list") {
      this.hamburgerClicked.emit()
    }
  }
}
