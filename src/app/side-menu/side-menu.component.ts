import { Component, OnInit } from '@angular/core';
import { menuLists } from '../menuLists';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  //menuListを定義する
  menuLists = menuLists;

  constructor(private sanitaizer:DomSanitizer) { 
    for(let i=0;i < menuLists.length;i++){
      this.menuLists[i].url_sanitaize = sanitaizer.bypassSecurityTrustUrl(this.menuLists[i].url_string);
      console.log(this.menuLists[i].url_sanitaize);
    }
  }

  ngOnInit() {
    console.log(menuLists);
  }

  
}
