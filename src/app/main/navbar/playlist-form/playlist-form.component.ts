import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  submitted: boolean;
  playlist: Playlist;

  constructor(private session: SessionService) {}

  @Output()
  submitedEmitter = new EventEmitter<boolean>();

  submit(f: NgForm): void {
    if (!f.valid) {
      return;
    }
    this.session.addPlaylist(this.name).subscribe((res: Playlist) => {
      //console.log(JSON.stringify(res));
      this.playlist = res;
      this.submitedEmitter.emit(true);
      this.submitted = true;
    });
    f.reset();
  }

  ngOnInit() {
    this.submitted = false;
  }
}
