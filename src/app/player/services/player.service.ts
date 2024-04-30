import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.interface';
import { environment } from 'src/environments/environment';
import { PlayerTeam } from '../models/player-team.interface';
import { PlayerStats } from '../models/player-stats.interface';
import { PlayerTrophies } from '../models/player-trphies.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getPlayerById(id: number):Observable<Player> {
    return this.httpClient.get<Player>(`${environment.API_URL}/players/${id}`);
  }

  getPlayersByName(term: string):Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${environment.API_URL}/players`,{params: {"nombre":term} })
  }

  getPlayerTeamsById(id: number):Observable<PlayerTeam[]> {
    return this.httpClient.get<PlayerTeam[]>(`${environment.API_URL}/players/${id}/teams`);
  }

  getPlayerStatsById(id: number):Observable<PlayerStats[]> {
    return this.httpClient.get<PlayerStats[]>(`${environment.API_URL}/stats/player/${id}`);
  }

  getPlayerTrophiesById(id: number):Observable<PlayerTrophies> {
    return this.httpClient.get<PlayerTrophies>(`${environment.API_URL}/trophies/players/${id}`)
  }
}
