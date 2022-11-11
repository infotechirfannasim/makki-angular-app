import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyFirstComponent} from "./my.first.component";
import {MySecondComponent} from "./my.second.component";

const routes: Routes = [
  {path: '', component: MyFirstComponent},
  {path: 'second', component: MySecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
