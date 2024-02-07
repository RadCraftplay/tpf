import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorVerticalComponent } from './separator-vertical.component';

describe('SeparatorVerticalComponent', () => {
  let component: SeparatorVerticalComponent;
  let fixture: ComponentFixture<SeparatorVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparatorVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeparatorVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
