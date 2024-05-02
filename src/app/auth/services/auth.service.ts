import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogged } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?:UserLogged;

  constructor(private httpClient: HttpClient) { }

  login(userName:string, passwd:string) {

  }
}
