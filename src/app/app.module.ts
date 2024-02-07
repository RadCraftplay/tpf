import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TasksDashboardComponent} from "./tasks-dashboard/tasks-dashboard.component";
import {LoginButtonComponent} from "./login-button/login-button.component";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./credentials";
import {HomeComponent} from "./home/home.component";
import { TaskEditorComponent } from './task-editor/task-editor.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginButtonComponent,
    TaskCreatorComponent,
    TaskDetailsComponent,
    TasksDashboardComponent,
    TaskEditorComponent
  ],
  bootstrap: [AppComponent],
  providers: [{provide: FIREBASE_OPTIONS, useValue: firebaseConfig}],
  exports: [
    LoginButtonComponent
  ]
})
export class AppModule { }
