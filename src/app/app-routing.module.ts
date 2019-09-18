import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: UserloginComponent, },
  {path: '', component: DashboardComponent, pathMatch: 'full',  canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
