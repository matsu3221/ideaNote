import { Injectable } from '@angular/core';
import { detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  detailList:detail[]=[];
  public today = new Date();  
  //追加するディテール情報
  addDetail = new detail();

  constructor() {
    // this.addDetailList("ディテール1");
    // this.addDetailList("ディテール2");
    console.log(this.detailList);
    // today:Date;
   }

  getDetailList():detail[]{
    return this.detailList;
  }

  addDetailList(detail:detail):void{
    console.log(detail);

    this.detailList.push(detail);

    console.log(this.detailList);
  }
}
