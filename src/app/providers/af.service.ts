import { Injectable } from '@angular/core';
import { Auth, authState, signInWithPopup, GoogleAuthProvider, } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Firestore, DocumentReference, doc, setDoc, docData, } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AfService {
  user: Observable<any>;


  constructor(public afAuth: Auth, private fs: Firestore) { 
    this.user = authState(this.afAuth);

  }
  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(this.afAuth, provider)
    

  }
  logout() {
    this.afAuth.signOut();} 

}
