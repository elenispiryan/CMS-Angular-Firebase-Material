import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/providers/user';
import { AfService } from 'src/app/providers/af.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  user: User | undefined;
  constructor(public AfService: AfService) { }

  ngOnInit(): void {
    this.AfService.user$.subscribe(user => this.user = user);
  }
  

}
