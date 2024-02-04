import { Component, Input } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimGroupComponent } from '../aim-group/aim-group.component';

@Component({
  selector: 'app-timespan-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimGroupComponent ],
  templateUrl: './timespan-list.component.html',
  styleUrl: './timespan-list.component.css'
})
export class TimespanListComponent {
  @Input() name : string = "TODO";

  constructor() {}
}
