import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  Teams: number
  TeamsList: string[]
  MatchList: Match[]

  constructor(r: number){
    this.Teams = r;
    const m: Match[] = [];
    const t: string[] = [];
    this.MatchList = m;
    this.TeamsList = t;
  }
}

export class CreateBracketService {
  b = new Bracket(0);
  
  getMatchList() {
    return this.b.MatchList;
  }
  getTeamsList() {
    return this.b.TeamsList;
  }
  getTeams() {
    return this.b.Teams.toString();
  }



  createBracket(Teams: number) {
    // simple check, title must be at least 1 char
    this.b.Teams = Teams;
    console.log(Teams)
    for (let i = 1; i <= Teams; i++) {
      this.b.TeamsList.push("Team " + i.toString());
    }
    for (let i = 0; i < Teams; i++) {
      console.log(this.b.TeamsList[i]);
    }



  }

  createPairings() {
    const shuffledTeams = this.shuffle(this.b.TeamsList);
  
    for (let i = 0; i < shuffledTeams.length; i += 2) {
      const team1 = shuffledTeams[i];
      const team2 = shuffledTeams[i + 1];
      const newMatch = new Match(team1, team2, 0, 0);
      this.b.MatchList.push(newMatch);
    }
  }
  
  shuffle(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
}
