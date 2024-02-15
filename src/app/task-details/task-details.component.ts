import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';
import { Aim, AimPriority, AimSpan } from '../models/aim';

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

  public get priority() : string {
    const priority: AimPriority = this.task!.priority;
    switch(priority) {
      case AimPriority.High:
        return "Wysoki";
      case AimPriority.Medium:
        return "Średni";
      case AimPriority.Low:
        return "Niski";
      default:
        return "Brak";
    }
  }

  private readonly months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];

  public get aimTime() : string {
    const type: AimSpan = this.task!.spanType;
    const spanValue: AimSpan = this.task!.spanValue;
    const year: AimSpan = this.task!.year;

    switch (type) {
      case AimSpan.Week:
        return `Tydzień ${spanValue}-${year}`
      case AimSpan.Month:
        return `${this.months[spanValue - 1]} ${year}`
      case AimSpan.Year:
        return `Rok ${year}`
      default:
        throw new Error("Method not implemented.");
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
