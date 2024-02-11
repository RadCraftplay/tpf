import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTranscriptionComponent } from './voice-transcription.component';

describe('VoiceTranscriptionComponent', () => {
  let component: VoiceTranscriptionComponent;
  let fixture: ComponentFixture<VoiceTranscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceTranscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoiceTranscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
