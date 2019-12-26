import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/Dashboard/home/home.component'
import { RegisterComponent } from './Component/Auth/register/register.component'
import { LoginComponent } from './Component/Auth/login/login.component'
import { AuthGuard } from './Guard/auth.guard'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
