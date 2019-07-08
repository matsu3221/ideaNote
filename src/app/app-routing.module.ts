import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaCreateComponent } from './idea-create/idea-create.component';
// import {} from '';
// url：https://qiita.com/mry_p/items/28ad53dad046a7efdff4

const routes: Routes = [
  {path:'',redirectTo:'/ideaCreate',pathMatch:'full'},
  {path:'ideaCreate',component:IdeaCreateComponent}
  {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
