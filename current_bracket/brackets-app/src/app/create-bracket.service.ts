import { Injectable } from '@angular/core';
/*
@Injectable({
  providedIn: 'root'
})
*/
class Match {
  Member1:     string;
	Member2:     string;
	Member1Wins: number;
	Member2Wins: number;

  constructor(m1: string, m2: string, m1w: number, m2w: number){
    this.Member1 = m1;
    this.Member2 = m2;
    this.Member1Wins = m1w;
    this.Member2Wins = m2w;
  }
}

class Bracket {
  Rounds: number
  MatchList: Match[]

  constructor(r: number){
    this.Rounds = r;
    const m: Match[] = [];
    this.MatchList = m;
  }
}

export class CreateBracketService {
  private b = new Bracket(0);
  getMatchList() {
    return this.b.MatchList;
  }
  getRounds() {
    return this.b.Rounds.toString();
  }

  createBracket(Rounds: number) {
    // simple check, title must be at least 1 char
    this.b.Rounds = Rounds;
  }
}
