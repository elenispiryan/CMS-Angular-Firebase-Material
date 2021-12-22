import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from "./admin-page.component";
import { AppNavbarComponent } from '../front-page/app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    DashboardComponent, AdminPageComponent, AppNavbarComponent, MenusComponent, PostsComponent, ConfirmationDialogComponent, EditMenuComponent, EditPostComponent
  ],
  entryComponents: [ConfirmationDialogComponent, EditMenuComponent, EditPostComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule
    
  ]
})
export class AdminPageModule { }
