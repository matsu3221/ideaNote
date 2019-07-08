import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickOK(){
    console.log("OK");
  }

  onClickCancel(){
    console.log("キャンセル");
  }

}
