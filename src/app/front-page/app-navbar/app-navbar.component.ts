import { Component, OnInit } from '@angular/core';
import { User } from '../../providers/user';
import { AfService } from '../../providers/af.service';
import { MenusService } from 'src/app/service/menus/menus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  user: User | undefined;
  menusList: any;
  constructor(public AfService: AfService, private menus: MenusService) { }

  ngOnInit(): void {
    this.AfService.user$.subscribe(user => this.user = user);
    this.menus.getMenus().subscribe( menus =>
      {
        this.menusList=menus;
      })
  }
  

}
