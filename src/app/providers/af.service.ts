import { Injectable } from '@angular/core';
import { Auth, authState, signInWithPopup, GoogleAuthProvider, } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Firestore, DocumentReference, doc, setDoc, docData, } from '@angular/fire/firestore';
import { User } from '../providers/user';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<any>;


  constructor(public afAuth: Auth, private fs: Firestore) { 
  this.user$ = authState(this.afAuth).pipe(  
      switchMap((user) => {
      if (user) {
        return docData(doc(this.fs, `users/${user.uid}`));
      } else 
        return of(null);
      
    })
    );

  }
  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(this.afAuth, provider)
    this.updateUser(credentials.user)
  }
    
  updateUser(user: User) {
   const userRef: DocumentReference = doc(this.fs, `users/${user.uid}`);
  const data: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    roles: {
    subscriber: true,
    admin: false,
    },
  };
    setDoc(userRef, data, { merge: true });
  }
  
  logout() {
    this.afAuth.signOut();
  } 
}