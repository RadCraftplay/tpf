import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimespanListComponent } from './timespan-list.component';

describe('TimespanListComponent', () => {
  let component: TimespanListComponent;
  let fixture: ComponentFixture<TimespanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimespanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimespanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
