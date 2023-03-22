import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
//import 'rxjs/add/operator/map';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HelloWorldService {  

  
  constructor(private http: HttpClient) { }

  getRounds() {
    return "8";
  }

}