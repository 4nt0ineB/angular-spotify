import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { ProfileComponent } from '../main/profile/profile.component';
import { SearchComponent } from '../main/search/search.component';
import { PlaylistComponent } from '../main/playlist/playlist.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user/:username',
    component: MainComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'playlist/:id',
        component: PlaylistComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
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
