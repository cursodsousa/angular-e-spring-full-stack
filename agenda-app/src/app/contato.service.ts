import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contato } from './contato/contato'
import { Observable } from 'rxjs';

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  save(contato: Contato) : Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }
}
