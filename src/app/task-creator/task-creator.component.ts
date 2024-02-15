import { Component } from '@angular/core';
import { TasksService } from "../services/tasks-service/tasks-service";
import { Location } from '@angular/common';
import { Aim } from '../models/aim';
import { getAuth } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {

  private readonly spanType: number = 0;

  constructor(private tasksService: TasksService, private location: Location, route: ActivatedRoute) {
    const typeStr = route.snapshot.paramMap.get('type')
    if (typeStr != null) {
      this.spanType = +typeStr
    }
  }

  goBack(): void {
    this.location.back();
  }
  selectedDate: Date = new Date();
  add(name: string, priority: number, description: string, tags: string): void {
    name = name.trim();
    if (!name) { return; }

    const auth = getAuth();

    const tagArray = tags.split(',').map(tag => tag.trim());
    const year = this.selectedDate.getFullYear();
    const spanValue = this.selectedDate.getMonth();
    const task = {
      description: description,
      done: false,
      name: name,
      owner: auth.currentUser?.uid,
      priority: priority,
      spanType: this.spanType,
      spanValue: spanValue,
      tags: tagArray,
      year: year,
    } as Aim ;
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
