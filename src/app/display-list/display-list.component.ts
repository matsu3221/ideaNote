import { Component, OnInit } from '@angular/core';
import { IdeaListService } from '../idea-list.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  constructor(private ideaListService: IdeaListService) { }

  ngOnInit() {
    console.log(this.ideaListService.ideaList);
  }

}
