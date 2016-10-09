/**
 * Created by yross on 08/10/16.
 */
import { Component } from '@angular/core';

import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../shared/artist";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {

  searchStr : string;
  searchRes : Artist[];
  artists: any;


  constructor(private _spotifyService: SpotifyService) {
  }

  searchMusic() {
    this._spotifyService
      .searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      });
  }
}
