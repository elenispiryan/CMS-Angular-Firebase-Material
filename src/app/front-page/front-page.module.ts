import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontRoutingModule } from './front-routing.module';
import { FrontPageComponent } from './front-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MaterialModule } from '../material.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [PagesListComponent,HomePageComponent,FrontPageComponent, AppNavbarComponent, PagesComponent ],
  entryComponents: [],
  
  imports: [
    
    CommonModule,
    FrontRoutingModule,
    MaterialModule

  ]
})
export class FrontPageModule { }
