import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { FlexitanksComponent } from './components/flexitanks/flexitanks.component';
import { AddFlexitankComponent } from './components/add-flexitank/add-flexitank.component';
import { FtDashboardComponent } from './components/ft-dashboard/ft-dashboard.component';

const routes: Routes = [
  {
    path: 'jobs', component: JobsComponent
  },
  {
    path: 'dash', component: FtDashboardComponent
  },
  {
    path: '', component: AddFlexitankComponent
  },
  
  {
    path: 'add-job', component: AddJobComponent, 
  },
  {
    path: 'flexitanks', component: FlexitanksComponent, 
  },
  {
    path: 'add-flexitank', component: AddFlexitankComponent, 
  },
  {
    path: '**',
    redirectTo: 'add-job'
  }
];


@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
