import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BracketService } from '../bracket.service';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {

  bracket: any;

 
  constructor(private bracketService: BracketService) { }

  ngOnInit(): void {
    this.bracketService.createBracket().subscribe((data: any) => {
      this.bracket = data;
    });
  }


  getTeamName(teamId: number): string {
    const team = this.bracket?.teams.find((t: { id: number; }) => {
      return t.id === teamId;
    });
    return team ? team.name : '';
  }

  updateMatchup(matchup: any, winnerTeamId: number) {
    matchup.winner_team_id = winnerTeamId;
    this.bracketService.updateMatchup(matchup).subscribe();
  }
  
  

}
