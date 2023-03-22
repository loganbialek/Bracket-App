import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

interface Match {
  Member1:     string;
	Member2:     string;
	Member1Wins: number;
	Member2Wins: number;
}

@Injectable()
export class SendMatchesService {

  matchList: Match[] = [];

  constructor(private http: HttpClient) { }

  getTitle() {
    //return this.http.get(`${environment.serverUrl}/hello-world`);
    this.http.get<Match[]>(`${environment.serverUrl}/sendMatches`).subscribe((data) => {
      this.matchList = data;
    });
    console.log(this.matchList);
    return this.matchList;
  }

}