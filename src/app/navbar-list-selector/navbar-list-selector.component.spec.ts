import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarListSelectorComponent } from './navbar-list-selector.component';

describe('NavbarListSelectorComponent', () => {
  let component: NavbarListSelectorComponent;
  let fixture: ComponentFixture<NavbarListSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarListSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarListSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
