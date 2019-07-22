import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeaImageService {

  dispFile:string = "/assets/image/noimage.png";
  reader = new FileReader();
  imageSrc = "";

  constructor() { }

  imageChange(event:any){
    console.log(event); 
    const file = event.target.files[0];
    this.reader.onload = ((e) => {
      this.dispFile = e.target['result'];
      console.log(this.dispFile);
    });
    this.reader.readAsDataURL(file);
    console.log(this.imageSrc);
  }
}
