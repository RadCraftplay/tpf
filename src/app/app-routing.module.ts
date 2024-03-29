import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailsComponent },
  { path: 'create/:type', component: TaskCreatorComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
