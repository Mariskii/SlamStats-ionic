import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogged } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { Observable, catchError, tap } from 'rxjs';

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
}
