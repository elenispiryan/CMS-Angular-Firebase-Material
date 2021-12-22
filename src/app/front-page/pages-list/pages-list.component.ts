import { Component, OnInit } from '@angular/core';
import { Database, listVal, DatabaseReference, query, ref } from '@angular/fire/database';
import { EMPTY, Observable } from 'rxjs'; // 'rxjs/Obserbable'

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {
  pagesObservable: Observable<any[] | null> = EMPTY;
  dbRef: DatabaseReference = ref(this.db, 'pages')

  constructor(private db: Database) { }

  ngOnInit() {
    this.pagesObservable = this.getPages();
  }
  
  getPages(): Observable<any[] | null> {
    const pagesQuery = query(this.dbRef)

    return listVal(pagesQuery);
  }
}
