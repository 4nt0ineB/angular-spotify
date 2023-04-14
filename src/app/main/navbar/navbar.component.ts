import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from '../../model/models';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links = [
    { path: 'profile', label: 'Home', icon: 'home' },
    { path: 'search', label: 'Search', icon: 'search' },
    { path: 'search', label: 'Create Playlist', icon: 'library_add' },
  ];
  playlists: Playlist[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {}

  changeView(childroute: string) {
    this.router.navigate([childroute], { relativeTo: this.route });
  }

  ngOnInit() {
    this.session.getPlaylists().subscribe((res: Playlist[]) => {
      this.playlists = res;
    });
  }
}
