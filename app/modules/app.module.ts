import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routes } from '../routes/app.route';

import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login.component';
import { HomeComponent } from '../components/home.component';
import { MyalertComponent } from '../components/mylert.component';


@NgModule({
  imports:        [BrowserModule, FormsModule, HttpModule,RouterModule.forRoot(routes)],
  declarations:   [AppComponent,LoginComponent,HomeComponent,MyalertComponent],
  bootstrap:      [AppComponent]
})
export class AppModule {}