import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BracketService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getBracket() {
    return this.http.get(`${this.apiUrl}/bracket`);
  }
  
  createBracket() {
    return this.http.get('/api/bracket');
  }

  updateMatchup(matchup: any) {
    return this.http.put(`${this.apiUrl}/matchup/${matchup.id}`, matchup);
  }
}
