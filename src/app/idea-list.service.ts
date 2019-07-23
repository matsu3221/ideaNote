import { Injectable } from '@angular/core';
import { idea } from './idea';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IdeaListService {

  // tslint:disable-next-line: new-parens
  ideaList: idea[];
  date = new Date();

  constructor() { 
    for(var i = 0; i < 5; i++) {
      // this.ideaList[i] = new idea('色々',);
    }
    console.log(this.ideaList);
  }
}
