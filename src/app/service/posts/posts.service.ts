import { Injectable } from '@angular/core';
import { provideFirestore, getFirestore, Firestore ,collection, doc, addDoc, deleteDoc,updateDoc,  collectionSnapshots  } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { collectionChanges } from 'rxfire/firestore';

export interface Post {
title: "",
url: "",
id?: "",
};


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  docPost= collection(this.afs, 'posts')
  constructor(private afs: Firestore) { }


  getPosts() {
     return collectionSnapshots(this.docPost).pipe(
      map(posts => {
        return posts.map(post => {
          
          const  Data = post.data();
          const  id = post.id;
          return { id:id, ...Data};
          console.log(post.id)
        });
      })
    );
  }

addPost(post: Post) {

addDoc(this.docPost, post);
}

deletePost(postId: string) {
  const docPost = doc(this.afs, `posts/${postId}`)
  deleteDoc(docPost);
 }

updatePost(postId: string, post: Post) {
  const docPost:any= doc(this.afs, `posts/${postId}`)
    updateDoc<Post>(docPost, post);
}
}
