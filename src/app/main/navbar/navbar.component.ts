import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links = [
    { path: 'profile', label: 'Home' },
    { path: 'search', label: 'Search' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  changeView(childroute: string) {
    this.router.navigate([childroute], { relativeTo: this.route });
  }

  ngOnInit() {}
}
