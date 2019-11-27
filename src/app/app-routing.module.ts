import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthgaurdService} from './service/authgaurd.service';

const routes: Routes = [
  { path: 'HomePage', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component : LogoutComponent, canActivate: [AuthgaurdService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
