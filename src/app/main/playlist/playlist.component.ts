import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  constructor(private session: SessionService) {}

  ngOnInit() {}
}
