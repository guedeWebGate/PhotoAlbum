import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: PhotoUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
