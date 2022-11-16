import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app.component';
import {StudentComponent} from "./component/student.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./component/login.component";
import {DashboardComponent} from "./component/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
