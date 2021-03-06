import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuardGuard } from './logged-in-guard.guard';

const routes: Routes = [
  {path: 'register', component: SignupFormComponent},
  {path: 'login', component: SigninFormComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
