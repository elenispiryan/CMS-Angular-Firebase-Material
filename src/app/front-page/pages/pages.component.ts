import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu, MenusService } from 'src/app/service/menus/menus.service';
import { PostsService } from 'src/app/service/posts/posts.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  menu!:any;
  postsList: any;
  

  constructor(private route: ActivatedRoute, private menus: MenusService, private posts: PostsService) { 
    this.route.params.subscribe( params => {
      console.log(params)
      this.menus.getConditionalMenus("url", "==", params['url']).subscribe(menus => {
        console.log(menus)
        if (menus.length > 0) {
        this.menu = menus[0]
      }
      this.posts.getConditionalPosts("menu_id", "==", this.menu.id).subscribe(posts => {
               
                this.postsList = posts;
                console.log(this.postsList);}
        )
    })
  })
}

  ngOnInit(): void {
  }

}
