import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class SendMatchesService {

  constructor(private http: HttpClient) { }

  getTitle() {
    return this.http.get(`${environment.serverUrl}/sendMatches`);
  }

}