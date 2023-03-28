import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { SendMatchesService } from './send-matches.service';
import { HelloWorldService } from './hello-world.service';
import { CreateBracketService } from './create-bracket.service';

export interface PeriodicElement {
  name: string;
  position: number;
  score: number;
  
}

interface Match {
  Member1:     string;
	Member2:     string;
	Member1Wins: number;
	Member2Wins: number;
}

interface Bracket {
  Teams:       number;
  TeamsList: string[];
  MatchList:  Match[];
  Rounds:      number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gators', score: 100.79},
  {position: 2, name: 'Bucks', score: 90.26},
  {position: 3, name: 'Packers', score: 69.41},
  {position: 4, name: 'Blue Devils', score: 59.0122},
  {position: 5, name: 'Honey Badgers', score: 51.0811},
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [SendMatchesService]
})
export class AppComponent implements OnInit {
  title = 'brackets-app';
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  Teams:string = "";
  TeamsList: string[] | undefined;
  MatchList: Match[] | undefined;
  BracketList: Bracket[] | undefined;
  MatchListOne: Match[] | undefined;
  Winner: string = "";

  eTN:string = "Edit Team Name";

  constructor(private hw: HelloWorldService, private cbs: CreateBracketService) {}

  ngOnInit() {
    
    // Read from getTitle which is on backend API. Convert back from JSON into a struct
    this.TeamsList = this.cbs.getTeamsList();
    this.MatchList = this.cbs.getMatchList();
    this.BracketList = this.cbs.getBracketList();
    this.MatchListOne = this.cbs.getBracketList()[0].MatchList;
    this.Winner = this.cbs.getWinner();
  }

  @ViewChild('roundsInput')
  roundsInputReference!: ElementRef;

  @ViewChild('nameInput')
  nameInputReference!: ElementRef;

  @ViewChild('nInput')
  nInputReference!: ElementRef;

  myFunction() {
    var x = document.getElementById("myDIV") as HTMLSelectElement;
    if (x.style.display === "none") {
      x.style.display = "block";
      this.eTN = "Close";
    } else {
      x.style.display = "none";
      this.eTN = "Edit Team Name";
    }
    
  }

  createBracket() {
    this.cbs.createBracket();
    this.ngOnInit();
    this.getBracketList();

    var x = document.getElementById("winner") as HTMLSelectElement;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  addTeam() {
    this.cbs.addTeam(
      this.nInputReference.nativeElement.value
    );
  }
  createPairings(){
    this.cbs.createPairings();
  }

  setTeamName(){
    var e = document.getElementById("editName") as HTMLSelectElement;
    this.cbs.setTeamName(e.options[e.selectedIndex].text,this.nameInputReference.nativeElement.value);
  }

  getTeamsList() {
    for (let i = 0; i < this.cbs.getTeamsList().length; i++) {
      console.log(this.cbs.getTeamsList()[i]);
    }
    return this.cbs.getTeamsList();
  }
  getMatchList() {
    return this.cbs.getMatchList();
  }
  getBracketList() {
    return this.cbs.getBracketList();
  }
  progressTeam(team: string) {
    this.cbs.progressTeam(team);
    this.Winner = this.cbs.getWinner();
    this.cbs.updateMatches(team);

    return 
  }
}
