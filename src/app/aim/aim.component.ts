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

  
  public get checkboxImage() : string {
    if (this.aim?.done) {
      return "../../assets/img/checkbox-checked.svg"
    }

    switch (this.aim?.priority) {
      case 2: // Low
        return "../../assets/img/checkbox_low.svg"
      case 3: // Medium
      return "../../assets/img/checkbox_med.svg"
      case 4: // High
        return "../../assets/img/checkbox_hig.svg"
      default:
        return "../../assets/img/checkbox.svg"
    }
  }
  

  public toggle() {
    this.aim!.done = !this.aim!.done
    this.tasksService.updateTask(this.aim!)
  }

  constructor(private tasksService: TasksService) { }
}
