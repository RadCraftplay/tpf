import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';
import { Aim } from '../models/aim';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  task: Aim | undefined;
  editMode: boolean = false
  selectedDate: Date = new Date();
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
  deleteTask(): void {
    if (this.task) {
      this.tasksService.deleteTask(this.task.id)
        .then(() => {
          this.goBack();
        });
    }
  }
  editTask(): void {
    if (this.task) {
      this.tasksService.updateTask(this.task)
        .then(task => {
          this.goBack();
        });
    }
  }
  enterEditMode(): void {
    this.editMode = true;
  }
  
  exitEditMode(): void {
    this.editMode = false;
    this.getTask();
  }
}
