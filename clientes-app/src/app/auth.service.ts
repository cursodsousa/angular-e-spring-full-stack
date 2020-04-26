import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
  }

  attemptLogin(username: string, password: string) : Observable<any> {
    const params = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`),
      'Content-type': 'application/x-www-form-urlencoded'
    }

    const url = environment.apiURLBase + '/oauth/token';
    return this.http.post(url, params.toString(), {headers});

  }
}
