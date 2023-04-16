import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Playlist } from '../../../model/models';
import { SessionService } from '../../../session.service';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css'],
})
export class PlaylistFormComponent implements OnInit {
  name: string;

  constructor(private session: SessionService) {}

  submit(f: NgForm): void {
    if (!f.valid) {
      return;
    }
    this.session.addPlaylist(this.name).subscribe((res: Playlist) => {
      console.log(JSON.stringify(res));
    });
    f.reset();
  }

  ngOnInit() {}
}
