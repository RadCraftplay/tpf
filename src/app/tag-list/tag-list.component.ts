import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { AimComponent } from '../aim/aim.component';
import { Aim } from '../models/aim';
import { Observable, Subject, fromEvent, takeUntil } from 'rxjs';
import { AimList } from '../models/aim-list';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [ ListHeaderComponent, AimComponent ],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent implements OnInit, OnChanges{
  @Input() aimSource : AimList | undefined
  aims : Aim[] = [];

  constructor() {}

  public onListChange = new Subject();

  fetchList() {
    this.aimSource!.getAims().pipe(takeUntil(this.onListChange)).subscribe(
      data => this.aims = data);
  }

  ngOnInit(): void {
    this.fetchList()
  }

  ngOnChanges(_: SimpleChanges) {
    // Stop fetching old list
    this.onListChange.next({});
    this.fetchList()
  }
}
