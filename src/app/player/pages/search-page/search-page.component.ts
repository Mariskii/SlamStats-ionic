import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent  implements OnInit {

  loading:boolean = false;
  errorHappened:boolean = false;

  searchTerm:string='';

  players?:Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {}


  searchByName(event:any) {
    this.searchTerm = event.target.value.toLowerCase();

    if(this.searchTerm.length <= 1) {
      this.clearPlayersSearched();
    } else {
      this.fetchPlayers();
    }
  }

  fetchPlayers() {
      this.errorHappened = false
      this.loading = true;

      this.playerService.getPlayersByName(this.searchTerm).pipe(

        catchError(err => {
          this.errorHappened = true;
          this.loading = false;

          return throwError(() => err);
        })

      ).subscribe(resultPlayers => {
        this.players = resultPlayers;
        this.loading = false;
      });
  }

  clearPlayersSearched() {
    this.players = undefined;

    return true;
  }
}
