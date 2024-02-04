import { Component, Input } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimComponent } from '../aim/aim.component';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimComponent ],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {
  @Input() name : string = "TODO";

  constructor() {}
}
