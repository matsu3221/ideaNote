import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaCreateComponent } from './idea-create/idea-create.component';
import { DetailComponent } from './detail/detail.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { DisplayListComponent } from './display-list/display-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/ideaCreate',pathMatch:'full'},
  {path:'ideaCreate',component:IdeaCreateComponent},
  {path:'addDetail',component:DetailComponent},
  {path:'displayList',component:DisplayListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
