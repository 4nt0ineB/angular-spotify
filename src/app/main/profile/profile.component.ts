import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from '../../model/models';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  playlists: Playlist[];
  constructor(
    public session: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  goToPlaylist(id: string): void {
    this.router.navigate(['playlist/' + id], { relativeTo: this.route.parent });
  }

  ngOnInit() {
    this.session.getPlaylists().subscribe((res: Playlist[]) => {
      this.playlists = res;
    });
  }
}
