import { Component, Input, OnInit } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { SeparatorVerticalComponent } from '../separator-vertical/separator-vertical.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AimList, DummyTagList, ListType, TimespannedList } from '../models/aim-list';
import { TimespanListComponent } from '../timespan-list/timespan-list.component';
import { NgIf } from '@angular/common';
import { TasksService } from "../services/tasks-service/tasks-service";
import { Task } from '../services/tasks-service/task';
import {map} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent, SeparatorVerticalComponent, TagListComponent, TimespanListComponent, NgIf ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tasks: Task[] = [];
  selectedList : AimList = new DummyTagList("sample");

  public get listAsTimespanned() : TimespannedList {
    return this.selectedList as TimespannedList
  }

  public readonly TAG = ListType.Tag;
  constructor(private tasksService: TasksService) { }
  onSelectedListChanged(list: AimList) {
    this.selectedList = list;
  }
  retrieveTasks(): void {
    this.tasksService.getAllTasks().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
            const docId = c.payload.doc.id;
            const data = c.payload.doc.data();
            const task: Task = {
              id: docId,
              name: data.name,
              priority: data.priority,
              description: data.description,
              tags: data.tags,
              year: data.year,
              spanType: data.spanType,
              spanValue: data.spanValue,
              done: data.done
            };
            return task
          }
        )
      )
    ).subscribe(data => {
      this.tasks = data;
    });
  }
}
