import { Component, ViewChild, OnInit } from '@angular/core';
import { Menu, MenusService } from 'src/app/service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

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
  

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'url'];

  
 
  menuDetails: Menu = {
    title: "",
    url: "",
    id: "",
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  constructor(private menus: MenusService) { }

  ngOnInit()  {
    this.menus.getMenus().subscribe((data:any)=>{
    this.dataSource = data;
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
addMenu() {
  this.menus.addMenu(this.menuDetails);
  console.log(this.menuDetails)}

 
}



