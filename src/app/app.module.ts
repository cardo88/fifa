import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ListComponent,
    AddComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
