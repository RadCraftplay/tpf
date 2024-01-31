import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TasksDashboardComponent} from "./tasks-dashboard/tasks-dashboard.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard', component: TasksDashboardComponent },
  { path: 'detail/:id', component: TaskDetailsComponent },
  { path: 'create', component: TaskCreatorComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
