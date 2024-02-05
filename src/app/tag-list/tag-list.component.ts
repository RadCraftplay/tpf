import { Component, Input, OnInit } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimComponent } from '../aim/aim.component';
import { Aim } from '../models/aim';
import { Observable } from 'rxjs';
import { AimList } from '../models/aim-list';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimComponent ],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent implements OnInit {
  @Input() name : string = "TODO";
  @Input() aimSource : AimList | undefined
  aims : Aim[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.aimSource)
    this.aimSource!.getAims().subscribe(
      data => this.aims = data);
  }
}
