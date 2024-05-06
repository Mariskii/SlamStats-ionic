import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogged } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { UserCreate } from '../models/create-user.interface';
import { Player } from 'src/app/player/models/player.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?:UserLogged;

  constructor(private httpClient: HttpClient) { }

  login(userName:string, passwd:string):Observable<UserLogged> {

    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('userName', userName);
    params = params.append('passwd', passwd);

    return this.httpClient.get<UserLogged>(`${environment.API_URL}/user/login`,{params}).pipe(
      tap(userLogin => this.user=userLogin)
    );
  }

  register (user:UserCreate) {
    return this.httpClient.post<UserCreate>(`${environment.API_URL}/user/register`, user).pipe(
      tap(async ({nombreUsuario,passwd}) => await this.login(nombreUsuario,passwd))
    );
  }

  logout() {
    this.user = undefined;
  }

  getFavoritePlayers():Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${environment.API_URL}/user/${this.user?.id}/favoritePlayers`);
  }
}
