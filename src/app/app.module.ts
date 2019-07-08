import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { IdeaCreateComponent } from './idea-create/idea-create.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    IdeaCreateComponent,
    IdeaDetailComponent,
    DetailModalComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
