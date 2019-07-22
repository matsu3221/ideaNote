import { Injectable } from '@angular/core';
import { idea } from './idea';
import { detail } from './detail';
import { Url } from 'url';
// import { url } from 'inspector';
// import * as fs from 'fs';
// import { writeFileSync, readFileSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class JsonCreateService {

  idea = new idea();
  // fs = require('fs');
  jsonSavePath = '../../assets/json/idea.json';
  fileName:string = "myIdea.json";
  fileReader = new FileReader();
  // href:Url;

  constructor() { }

  saveIdea(title:string,detailList:detail[],imgUrl:string){
    console.log("save");
    this.idea.title =  title;
    this.idea.detailList = detailList;
    this.idea.imgUrl = imgUrl;
    var json = JSON.stringify(this.idea);

    //以下、jsonファイル保存処理
    // if(this.fileExist()){
    //   this.read();
    // };
    var blob = new Blob([json],{type:'text/plain'});
    console.log(blob);
    console.log(json);

    var myIdea = this.blobToFile(blob,this.fileName);
    console.log(myIdea);
    this.fileReader.readAsText(myIdea);
    var a = document.getElementById("ideaDownload");
    a.href = URL.createObjectURL(blob);
  }

  blobToFile(blob:Blob,fileName:string):File{
    var b: any = blob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>blob;
  }

  // fileExist():boolean{
  //   var isExist = false;
  //   try{
  //     fs.statSync(this.jsonSavePath);
  //     isExist = true;
  //   }catch(err){
  //     isExist = false;
  //   }
  //   return isExist;
  // }

  // read(){
  //   var existIdea:string;
  //   existIdea = fs.readFileSync(this.jsonSavePath,'utf-8');
  //   console.log(existIdea);
  // }
}
