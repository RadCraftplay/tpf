import {Component} from '@angular/core';

@Component({
  selector: 'voice-transcription',
  templateUrl: './voice-transcription.component.html',
  styleUrl: './voice-transcription.component.css'
})
export class VoiceTranscriptionComponent {

  recognition: any;
  recognitionActive: boolean = false;
  transcript: string = '';

  constructor() {
    const {webkitSpeechRecognition} : IWindow = <IWindow><unknown><unknown>window
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'pl-PL';
    this.recognition.interimResults = true;
    this.recognition.onresult = (event: { results: string | any[]; }) => {
      const actual_event = event.results[event.results.length - 1]
      if (actual_event.isFinal) {
        const transcript = actual_event[0].transcript;
        console.log(event.results)
        this.transcript += transcript;
        console.log(transcript)
        // @ts-ignore
        document.getElementById('new-task-description').innerText = this.transcript;
      }
    };
  }

  toggleRecognition() {
    if (this.recognitionActive) {
      this.stopRecognition();
    } else {
      this.startRecognition();
    }
  }

  startRecognition() {
    this.transcript = '';
    this.recognition.start();
    this.recognitionActive = true;
  }

  stopRecognition() {
    this.recognition.stop();
    this.recognitionActive = false;
  }
}

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
