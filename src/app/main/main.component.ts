import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  count: number;
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe((param) => {
      this.session.setUsername(param['username']);
    });
  }
}
