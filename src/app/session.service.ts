import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, of, map } from 'rxjs';
import {
  Playlist,
  PlaylistResponse,
  Track,
  TrackResponse,
} from './model/models';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  static baseAPIUrl: string =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/';
  static openAPIUrl: string = SessionService.baseAPIUrl + 'data/';

  private username: string;
  private userAPIUrl: string;

  constructor(private http: HttpClient) {}

  setUsername(username: string): void {
    this.username = username;
    this.userAPIUrl = SessionService.baseAPIUrl + 'user/' + this.username + '/';
  }

  getUsername(): string {
    return this.username;
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http
      .get(`${this.userAPIUrl}playlist`)
      .pipe(map((res: any) => res.playlists));
  }

  getPlaylistTracks(id: string): Observable<Track[]> {
    return this.http
      .get(`${this.userAPIUrl}playlist/${id}`)
      .pipe(map((res: any) => res.Track));
  }
}
