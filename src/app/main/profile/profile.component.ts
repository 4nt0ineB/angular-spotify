import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/models';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(public session: SessionService) {}

  ngOnInit() {
    this.session.getPlaylists().subscribe((res: Playlist[]) => {
      console.log(res);
    });
  }
}
