import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {LoginButtonComponent} from "./login-button/login-button.component";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./credentials";
import {HomeComponent} from "./home/home.component";
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginButtonComponent,
    TaskCreatorComponent,
    TaskDetailsComponent,
    TaskEditorComponent
  ],
  bootstrap: [AppComponent],
  providers: [{provide: FIREBASE_OPTIONS, useValue: firebaseConfig}, provideAnimationsAsync()],
  exports: [
    LoginButtonComponent
  ]
})
export class AppModule { }
