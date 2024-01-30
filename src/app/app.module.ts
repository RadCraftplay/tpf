import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TasksDashboardComponent} from "./tasks-dashboard/tasks-dashboard.component";
import {LoginButtonComponent} from "./login-button/login-button.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginButtonComponent,
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    TaskCreatorComponent,
    TaskDetailsComponent,
    TasksDashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
