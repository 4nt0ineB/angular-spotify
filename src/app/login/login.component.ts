import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  constructor() {}

  @Output()
  usernameEmitter = new EventEmitter<string>();

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.usernameEmitter.emit(this.username);
    form.reset();
  }

  ngOnInit() {}
}
