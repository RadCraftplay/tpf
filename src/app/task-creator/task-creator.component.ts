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

  add(name: string, priority: string, description: string, tags: string, ): void {
    name = name.trim();
    if (!name) { return; }
    const task = { name: name, priority: priority, description: description, tags: tags } as Task ;
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
