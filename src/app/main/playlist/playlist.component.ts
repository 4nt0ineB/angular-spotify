import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private session: SessionService, private route: ActivatedRoute) {}

  ngOnInit() {
    let playlistId = this.route.snapshot.paramMap.get('id');
    this.session.getPlaylists().subscribe((res: Playlist[]) => {
      this.playlist = res.filter((p) => p.id == playlistId).pop();
    });

    this.session.getPlaylistTracks(playlistId).subscribe((res: Track[]) => {
      this.tracks = res;
    });
  }
}
