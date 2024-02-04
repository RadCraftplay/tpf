import { Component, Input } from '@angular/core';
import { AimComponent } from '../aim/aim.component';

@Component({
  selector: 'app-aim-group',
  standalone: true,
  imports: [ AimComponent ],
  templateUrl: './aim-group.component.html',
  styleUrl: './aim-group.component.css'
})
export class AimGroupComponent {
  @Input() name : string = "TODO";

  constructor() {}
}
