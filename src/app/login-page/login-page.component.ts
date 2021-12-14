import { Component, OnInit } from '@angular/core';
import { User } from '../providers/user';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
user: User | undefined;
  constructor(public AfService: AfService) { }

  ngOnInit(): void {
    this.AfService.user$.subscribe(user => this.user = user);
  }
login(){
  this.AfService.loginWithGoogle();
}
}
