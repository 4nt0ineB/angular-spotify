import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../../model/models';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  tracks: Track[];
  constructor(private session: SessionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.session
      .getPlaylistTracks(this.route.snapshot.paramMap.get('id'))
      .subscribe((res: Track[]) => {
        this.tracks = res;
      });
  }
}
