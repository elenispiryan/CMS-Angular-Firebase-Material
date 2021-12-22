import { Injectable } from '@angular/core';
import { provideFirestore, getFirestore, Firestore ,collection, doc, addDoc, deleteDoc,updateDoc, collectionSnapshots, query, where  } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { collectionChanges } from 'rxfire/firestore';

export interface Menu {
title: "",
url: "",
id?: "",
};


@Injectable({
  providedIn: 'root'
})
export class MenusService {
  docMenu= collection(this.afs, 'menus')
  constructor(private afs: Firestore) { }


  getMenus() {
     return collectionSnapshots(this.docMenu).pipe(
      map(menus => {
        return menus.map(menu => {
          
          const  Data = menu.data();
          const  id = menu.id;
          return { id:id, ...Data};
          
        });
      })
    );
  }


  getConditionalMenus(field: string, condition?: any, value?: string) {
    const condition_query = query(this.docMenu, where(field, condition, value))
    return collectionSnapshots(condition_query).pipe(
      map(menus => {
        return menus.map(menu => {
          const  Data = menu.data();
          const  id = menu.id;
                    return {
            id: id,
          }
        })
      })
    )
  }


addMenu(menu: Menu) {

addDoc(this.docMenu, menu);
}

deleteMenu(menuId: string) {
  const docMenu = doc(this.afs, `menus/${menuId}`)
  deleteDoc(docMenu);
 }

updateMenu(menuId: string, menu: Menu) {
  const docMenu:any= doc(this.afs, `menus/${menuId}`)
    updateDoc<Menu>(docMenu, menu);
}
}
