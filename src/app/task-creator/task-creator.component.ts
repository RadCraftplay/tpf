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
  selectedDate: Date = new Date();
  add(name: string, priority: number, description: string, tags: string): void {
    name = name.trim();
    if (!name) { return; }
    const tagArray = tags.split(',').map(tag => tag.trim());
    const year = this.selectedDate.getFullYear();
    const spanValue = this.getWeekOfMonth(this.selectedDate);
    const task = { name: name, priority: priority, description: description, tags: tagArray, year: year, spanValue: spanValue } as Task ;
    this.tasksService.addTask(task)
      .then(task => {
        this.goBack()
      });
  }
  priority: string = '';
  setPriority(priority: string): void {
    this.priority = priority;
  }
  private getWeekOfMonth(date: Date): number {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay() - 1; // Zwraca 0 dla poniedziałku
    const remainingDays = date.getDate() - 1;
    return Math.ceil((dayOfWeek + remainingDays) / 7);
  }
}
