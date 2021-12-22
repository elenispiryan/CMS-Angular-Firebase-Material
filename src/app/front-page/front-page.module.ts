import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontRoutingModule } from './front-routing.module';
import { FrontPageComponent } from './front-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';

@NgModule({
  declarations: [PagesListComponent,HomePageComponent,FrontPageComponent],
  entryComponents: [],
  
  imports: [
    
    CommonModule,
    FrontRoutingModule,

  ]
})
export class FrontPageModule { }
