import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  AwsAuthenticatorModule,
  AWSCognitoConfig,
  AuthGuard
} from '@webgate/ngx-aws-authenticator';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment';

const awsConfig: AWSCognitoConfig = {
  userPoolId: environment.userPoolId,
  clientId: environment.clientId,
  allowRegister: false
};

@NgModule({
  declarations: [AppComponent, PhotoUploadComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FileUploadModule,
    AwsAuthenticatorModule.forRoot(awsConfig),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
