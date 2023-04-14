import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ProfileComponent } from './main/profile/profile.component';
import { SessionService } from './session.service';
import { SearchComponent } from './main/search/search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './main/playlist/playlist.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    MainComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    PlaylistComponent,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
