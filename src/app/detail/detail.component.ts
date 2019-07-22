import { Component, OnInit } from '@angular/core';
import { detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail = new detail();
  
  constructor(private detailService:DetailService) { }

  ngOnInit() {
  }

  onClick(detail:detail){
    console.log(detail);
    this.detailService.addDetailList(detail);
  }
}
