import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { detail } from '../detail';
import { IdeaImageService } from '../idea-image.service';
import { JsonCreateService } from '../json-create.service';

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.component.html',
  styleUrls: ['./idea-create.component.css']
})
export class IdeaCreateComponent implements OnInit {

  title:string="";
  detailList:detail[];

  constructor(private detailService:DetailService,private ideaImageService:IdeaImageService,private jsonCreate:JsonCreateService) { }
  // detailList:detail[] = [];

  ngOnInit() {
    // this.detailList = this.detailService.getDetailList();
  }

  imageChange(event:any){
    this.ideaImageService.imageChange(event);
  }

  saveIdea(){
    // console.log(this.title);
    // if(this.title === ""){
    //   this.title ="notitle";
    // }
    var blob = this.jsonCreate.saveIdea(this.title,this.detailService.detailList,this.ideaImageService.dispFile);
    // Aタグのhref属性にBlobオブジェクトを設定する。
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob);
    link.download = "ideaFile.json";
    console.log("downloadは");
    link.dataset.downloadurl = ["text/plain", link.download, link.href].join(":");
    // console.log(window.URL);
    console.log(link);
    link.click();
  }
}
