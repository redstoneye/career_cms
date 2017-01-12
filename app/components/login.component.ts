import {Component, OnInit} from '@angular/core';
import {Login} from '../classes/login.class';
import {LoginService} from '../services/login.service';
import {HttpAdaptor} from '../classes/http.class';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'login',
  templateUrl: 'app/views/login.component.html',
  styleUrls: ['app/css/login.component.css'],
  providers:[LoginService,HttpAdaptor]
})

export class LoginComponent implements OnInit{

  model = new Login('', '');
  submitted = false;
  users:{};
  error:boolean = false;
  message:string = '';
  element:Element;
  constructor(
    private loginService: LoginService,
    private router : Router,
    private location:Location
  ) {}

  onSubmit() {
    this.submitted = true;
    this.loginService.Login(this.model.cellphone,this.model.pwd)
      .then(value => {
        if(value["RES"] === 'FAILED'){
          this.error = true;
          this.message = value["ERROR_MSG"]["MESSAGE"];
          setTimeout(()=>{this.error = false},3000);
        }else{
          console.log("value:",value);
          this.location.replaceState('/');
          this.router.navigate(['home'])
        }

      });
  }
  ngOnInit() {
    console.log(this.element)
  }
}