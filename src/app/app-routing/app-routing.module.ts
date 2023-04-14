import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { UserComponent } from '../main/user/user.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user/:username',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      /*  {
        path: 'profile',
        component: UserComponent,
        outlet: 'dashboard',
      }, */
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
