import { Component } from '@angular/core';
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';
import { Aim } from '../models/aim';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {

  constructor(private tasksService: TasksService,
              private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  add(name: string, priority: number, description: string, tags: string, year: number, spanValue: number): void {
    name = name.trim();
    if (!name) { return; }
    const tagArray = tags.split(',').map(tag => tag.trim());
    const task = { name: name, priority: priority, description: description, tags: tagArray, year: year, spanValue: spanValue } as Aim ;
    this.tasksService.addTask(task)
      .then(task => {
        this.goBack()
      });
  }
  priority: string = '';
  setPriority(priority: string): void {
    this.priority = priority;
  }
}
