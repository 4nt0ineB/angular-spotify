import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist, Track } from '../../model/models';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist;
  tracks: Track[];
  constructor(
    public session: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deletePlaylist(): void {
    this.session.deletePlaylist(this.playlist.id);
    console.log(this.route.url);
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.session.getPlaylists().subscribe((res: Playlist[]) => {
        this.playlist = res.filter((p) => p.id == param['id']).pop();
      });

      this.session.getPlaylistTracks(param['id']).subscribe((res: Track[]) => {
        this.tracks = res;
      });
    });
  }
}
