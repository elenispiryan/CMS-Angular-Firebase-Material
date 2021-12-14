import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AppComponent } from "./app.component";
import { AdminGuard } from "./guards/admin.guard";
import { SubscriberGuard } from "./guards/subscriber.guard";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { PagesListComponent } from "./pages-list/pages-list.component";

const routes: Routes = [
    { path: '', component: HomePageComponent } ,
    { path: 'login', component: LoginPageComponent },
    { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
    { path: 'article', component: PagesListComponent, canActivate: [SubscriberGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
  })

export class AppRoutingModule {};