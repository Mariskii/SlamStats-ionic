import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Player } from '../models/player.interface';
import { environment } from 'src/environments/environment';
import { PlayerTeam } from '../models/player-team.interface';
import { PlayerStats } from '../models/player-stats.interface';
import { PlayerTrophies } from '../models/player-trphies.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PlayerCache } from '../models/player-cache.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerCache?: PlayerCache;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) { }

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

  getPlayerData(id:number):Observable<PlayerCache> {
    return forkJoin({
      player: this.getPlayerById(id),
      teams: this.getPlayerTeamsById(id),
      stats: this.getPlayerStatsById(id),
      trophies: this.getPlayerTrophiesById(id)
    })
  }

  isFavoritePlayer(playerId: number):Observable<boolean> {
    return this.httpClient.get<boolean>(`${environment.API_URL}/user/${this.authService.user?.id}/favoritePlayers/${playerId}`);
  }

  addFavorite(playerId: number) {

    let params = new HttpParams();

    params = params.append('idPlayer', playerId);
    params = params.append('idUser', this.authService.user!.id);

    return this.httpClient.post(`${environment.API_URL}/user/addFavorite`,params);

  }

  deleteFavorite(playerId: number) {

    let params = new HttpParams();

    params = params.append('idPlayer', playerId);
    params = params.append('idUser', this.authService.user!.id);

    return this.httpClient.delete(`${environment.API_URL}/user/deleteFavorite`,{params});

  }
}
