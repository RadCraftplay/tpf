import { Component, Input } from '@angular/core';
import { Aim } from '../models/aim';
import { TasksService } from '../services/tasks-service/tasks-service';

@Component({
  selector: 'app-aim',
  standalone: true,
  imports: [],
  templateUrl: './aim.component.html',
  styleUrl: './aim.component.css'
})
export class AimComponent {
  @Input() aim: Aim | undefined;

  
  public get aimLink() : string {
    return `/detail/${this.aim?.id}`
  }

  public toggle() {
    this.aim!.done = !this.aim!.done
    this.tasksService.updateTask(this.aim!)
  }

  constructor(private tasksService: TasksService) { }
}
