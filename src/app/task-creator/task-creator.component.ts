import { Component } from '@angular/core';
import { Task } from "../services/tasks-service/task";
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';

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

  add(name: string, description: string, date_created: string, group_id: string, ): void {
    name = name.trim();
    if (!name) { return; }
    const task = { name: name, description: description, date_created: date_created, group_id: group_id } as Task ;
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
