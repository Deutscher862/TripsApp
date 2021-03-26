import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;

  constructor(public auth: AuthService) {}

  ngOnInit(){
    
  }

  signUp() {
    this.auth.signup(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.auth.login(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.auth.logout();
  }

}
