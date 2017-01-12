import { Component } from '@angular/core';
import {HttpAdaptor} from '../classes/http.class';
import {Router} from '@angular/router'

@Component({
  selector: 'home',
  templateUrl: 'app/views/home.component.html',
  styleUrls: ['app/css/home.component.css'],
  providers:[HttpAdaptor]
})

export class HomeComponent {
  submitted = false;
  users:{};

  constructor(

  ) {}
  element:Element;

}