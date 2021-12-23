import { Component, ViewChild, OnInit, inject} from '@angular/core';
import { Post, PostsService } from 'src/app/service/posts/posts.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component'
import { EditPostComponent} from './edit-post/edit-post.component'
import { MenusService } from 'src/app/service/menus/menus.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatSort)
   sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  dataSource!: MatTableDataSource<Post>;
  displayedColumns: string[] = ['id', 'title', 'menu_id', 'content', 'actions'];

  
 
  postDetails: Post = {
    title: "",
    menu_id: "",
    content: "",

  }
  menusList: any;
  postForm: FormGroup;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  constructor(private posts: PostsService, private menus: MenusService, public dialog: MatDialog, private fb:FormBuilder) { 

    this.postForm = this.fb.group({
      title: ["", Validators.required],
      menu_id: ["", Validators.required],
      content: ["", Validators.required],
  })}


  deletePost(postId: string) {
    this.posts.deletePost(postId);
  }

  openDialog(postId: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePost(postId);
      }
    });
  }


  openEditDialog(postId: string, title: string, menu_id: string, content:string,): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: {title, menu_id, content, "menus":this.menusList}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
      console.log('Edit dialog was closed');
      this.editPost(postId, result)
 
    });
  }

  ngOnInit()  {
    this.dataSource = new MatTableDataSource();

    this.posts.getPosts().subscribe((data:any)=>{
      this.dataSource.data = data;
      this.menus.getMenus().subscribe((data:any)=>{
        this.menusList=data;

      });
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
addPost() {
  this.posts.addPost(this.postForm.value);
  //console.log(this.postDetails)}

}


  editPost(postId: string, post: Post) {
    this.posts.updatePost(postId, post);
  }



  }