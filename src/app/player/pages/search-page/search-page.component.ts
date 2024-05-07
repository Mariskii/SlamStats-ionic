import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent  implements OnInit {

  loading:boolean = false;

  searchTerm:string='';

  players?:Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {}


  searchByName(event:any) {
    this.searchTerm = event.target.value.toLowerCase();

    if(this.searchTerm.length <= 1) {
      this.clearPlayersSearched();
    } else {
      this.loading = true;
      this.playerService.getPlayersByName(this.searchTerm).subscribe(resultPlayers => {
        this.players = resultPlayers;
        this.loading = false;
      });
    }
  }

  clearPlayersSearched() {
    this.players = undefined;

    return true;
  }
}
