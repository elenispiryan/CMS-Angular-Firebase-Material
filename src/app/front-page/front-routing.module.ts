import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { FrontPageComponent } from "./front-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PagesListComponent } from './pages-list/pages-list.component';
import { PagesComponent } from "./pages/pages.component";


const routes: Routes = [
    {
        path: '',
        component: FrontPageComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'home',
                component: HomePageComponent,
            },
        
            {
                path: 'article', 
                component: PagesListComponent,
            },
        
            {
                path: '**',
                redirectTo: 'home',
          },
          {
            path: 'pages/:url',
            component: PagesComponent,
      },
         

]
}]

export const FrontRoutingModule = RouterModule.forChild(routes);