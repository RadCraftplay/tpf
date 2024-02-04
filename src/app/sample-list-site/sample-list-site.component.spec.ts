import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleListSiteComponent } from './sample-list-site.component';

describe('SampleListSiteComponent', () => {
  let component: SampleListSiteComponent;
  let fixture: ComponentFixture<SampleListSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleListSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleListSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
