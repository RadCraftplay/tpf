import { Component, Input } from '@angular/core';
import { Aim } from '../models/aim';

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
  

  constructor() { }
}
