import { Component, OnInit } from '@angular/core';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { DetailService } from '../detail.service';
import { detail } from '../detail';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {

  constructor(private detailService:DetailService) { }

  ngOnInit() {
  }
  
}
