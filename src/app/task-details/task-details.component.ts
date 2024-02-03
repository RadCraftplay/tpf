import { Component, OnInit } from '@angular/core';
import { Task } from '../services/tasks-service/task';
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id : string | null = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.tasksService.getTaskById(id)
        .subscribe(task => {
          task.id = id
          this.task = task
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.task) {
      this.tasksService.updateTask(this.task)
        .then(task => {
          this.goBack();
        });
    }
  }
}
