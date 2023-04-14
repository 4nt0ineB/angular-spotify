import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { ProfileComponent } from '../main/profile/profile.component';
import { SearchComponent } from '../main/search/search.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user/:username',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
        outlet: 'dashboard',
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
