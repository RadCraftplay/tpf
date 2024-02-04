import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimGroupComponent } from './aim-group.component';

describe('AimGroupComponent', () => {
  let component: AimGroupComponent;
  let fixture: ComponentFixture<AimGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AimGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
