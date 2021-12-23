import { Component, ViewChild, OnInit, inject} from '@angular/core';
import { Menu, MenusService } from 'src/app/service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component'
import { EditMenuComponent} from './edit-menu/edit-menu.component'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  @ViewChild(MatSort)
   sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  dataSource!: MatTableDataSource<Menu>;
  displayedColumns: string[] = ['id', 'title', 'url', 'actions'];

    menuDetails: Menu = {
    title: "",
    url: "",

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  constructor(private menus: MenusService, public dialog: MatDialog) { }

  openDialog(menuId: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMenu(menuId)
      }
    });
  }


  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: {title, url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
             }
          this.editMenu(menuId, result)
 
    });
  }

  ngOnInit()  {
    this.dataSource = new MatTableDataSource();

    this.menus.getMenus().subscribe((data:any)=>{
      this.dataSource.data = data;
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addMenu() {
    this.menus.addMenu(this.menuDetails);
}

  editMenu(menuId: string, menu: Menu) {
    this.menus.updateMenu(menuId, menu);
  }

  deleteMenu(menuId: string) {
    this.menus.deleteMenu(menuId);
  }

  }