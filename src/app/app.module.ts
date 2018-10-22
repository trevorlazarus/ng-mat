import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material";
import { FtDashboardComponent } from './components/ft-dashboard/ft-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { JobsComponent } from './components/jobs/jobs.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { FlexitanksComponent } from './components/flexitanks/flexitanks.component';
import { AddFlexitankComponent } from './components/add-flexitank/add-flexitank.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    FtDashboardComponent,
    JobsComponent,
    AddJobComponent,
    FlexitanksComponent,
    AddFlexitankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

   MatListModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'web-tracker'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
