import { Component, Input } from '@angular/core';
import { AimComponent } from '../aim/aim.component';
import { Aim, AimSpan } from '../models/aim';

@Component({
  selector: 'app-aim-group',
  standalone: true,
  imports: [ AimComponent ],
  templateUrl: './aim-group.component.html',
  styleUrl: './aim-group.component.css'
})
export class AimGroupComponent {
  @Input() span : AimSpan = AimSpan.Week
  @Input() spanValue : number = 0
  @Input() year : number = 0
  @Input() aims : Aim[] = []

  constructor() {}

  private calculateWeek() : string {
    return ""
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

  public get name() : string {
    switch (this.span) {
      case AimSpan.Week:
        return `Tydzień ${this.spanValue}-${this.year} ${this.calculateWeek()}`
      case AimSpan.Month:
        return `${this.months[this.spanValue - 1]} ${this.year}`
      case AimSpan.Year:
        return `Rok ${this.year}`
      default:
        throw new Error("Method not implemented.");
    }
  }
}
