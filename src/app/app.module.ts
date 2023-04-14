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

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    MainComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
