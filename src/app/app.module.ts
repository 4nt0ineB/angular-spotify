import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
