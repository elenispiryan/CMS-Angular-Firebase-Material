import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AppComponent } from "./app.component";
import { AdminGuard } from "./guards/admin.guard";
import { SubscriberGuard } from "./guards/subscriber.guard";
import { FrontPageComponent } from "./front-page/front-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
    { path: 'home', loadChildren: () => import('../app/front-page/front-page.module').then(m => m.FrontPageModule)},
    { path: 'login', component: LoginPageComponent },
    { path: 'admin', loadChildren: () => import('../app/admin-page/admin-page.module').then(x=>x.AdminPageModule) , canActivate: [AdminGuard], },
    { path: '**', redirectTo: 'home'}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
  })

export class AppRoutingModule {};