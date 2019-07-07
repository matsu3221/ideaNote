import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaCreateComponent } from './idea-create/idea-create.component';
const routes: Routes = [
  {path:'./ideaCreate',component:'IdeaCreateComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
