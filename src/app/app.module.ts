import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [LoginComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
