import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, of, map } from 'rxjs';
import {
  Playlist,
  PlaylistCreation,
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

  deletePlaylist(id: string): void {
    console.log(this.userAPIUrl + 'playlist/' + id);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .delete(this.userAPIUrl + 'playlist/' + id, { headers: headers })
      .subscribe((res: any) => console.log(id));
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http
      .get(`${this.userAPIUrl}playlist`)
      .pipe(map((res: any) => res.playlists));
  }

  getPlaylistTracks(id: string): Observable<Track[]> {
    return this.http
      .get(`${this.userAPIUrl}playlist/${id}`)
      .pipe(map((res: any) => res.tracks));
  }

  addPlaylist(name: string): Observable<Playlist> {
    let pllst: PlaylistCreation;
    pllst.name = name;
    return this.http.post<Playlist>(this.userAPIUrl + 'playlist/', pllst);
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    //return '#' + ('000000' + color).slice(-6);
    return '#ffffff';
  }
}
