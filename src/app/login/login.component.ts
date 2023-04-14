import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  constructor(private router: Router) {}

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    //this.router.navigate(['/']);
    console.log('go');
    form.reset();
  }

  ngOnInit() {}
}
