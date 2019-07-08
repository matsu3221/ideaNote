import { Component, OnInit } from '@angular/core';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {

  constructor() { }

  detailList:string[]=[
    "データを取得できる",
    "データを登録できる",
  ];

  ngOnInit() {
  }

  onClick(){

  }
}
