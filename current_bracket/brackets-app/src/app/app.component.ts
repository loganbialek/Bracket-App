import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { SendMatchesService } from './send-matches.service';

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
export class AppComponent {
  title = 'brackets-app';
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor(private sm: SendMatchesService) {}

  matchList = this.sm.getTitle();
  //constructor(private sm: SendMatchesService) {}
 /*
     <li *ngFor="let match of matchList">
      {{ match['Member1'] }}
    </li>


  matchList: Match[] = [];

 

  ngOnInit() {
    // Read from getTitle which is on backend API. Convert back from JSON into a struct
    this.matchList = 
  }
  */
}
