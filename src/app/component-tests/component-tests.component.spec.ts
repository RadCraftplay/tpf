import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTestsComponent } from './component-tests.component';

describe('ComponentTestsComponent', () => {
  let component: ComponentTestsComponent;
  let fixture: ComponentFixture<ComponentTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
