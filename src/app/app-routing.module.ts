import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TasksDashboardComponent} from "./tasks-dashboard/tasks-dashboard.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TaskCreatorComponent} from "./task-creator/task-creator.component";
import { HomeComponent } from './home/home.component';
import { ComponentTestsComponent } from './component-tests/component-tests.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: TasksDashboardComponent },
  { path: 'detail/:id', component: TaskDetailsComponent },
  { path: 'create', component: TaskCreatorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: ComponentTestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
