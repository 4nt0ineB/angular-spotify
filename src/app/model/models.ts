interface Album {
  album_id: string;
  album: string;
}

interface AlbumResponse {
  albums: Album[];
}

interface Playlist {
  name: string;
  creationDate: number;
  id: string;
}

interface PlaylistCreation {
  name: string;
}

interface AddSongToPlaylist {
  songId: string;
}

interface PlaylistResponse {
  playlists: Playlist[];
}

interface Track {
  id: string;
  name: string;
  albumId: string;
  artistId: string;
}

interface TrackResponse {
  tracks: Track[];
}

interface Artist {
  id: string;
  name: string;
}

interface ArtistResponse {
  artists: Artist[];
}

export {
  Album,
  AlbumResponse,
  PlaylistResponse,
  Playlist,
  PlaylistCreation,
  AddSongToPlaylist,
  Track,
  TrackResponse,
  Artist,
  ArtistResponse,
};
