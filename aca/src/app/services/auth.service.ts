import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { auth, googleAuthProvider, faceBookAuthProvider } from '../../firebase/firebase';

import { User } from '../interfaces/interface';

@Injectable()
export class AuthService {
  constructor() {
    this.addAuthStateChangeHandler();
  }

  private observedUser = new Subject<User>();

  public setUser(user: User): void {
    this.observedUser.next(user);
  }

  public getUser(): Observable<object> {
    return this.observedUser.asObservable();
  }

  public signInGoogle(): void {
    auth.signInWithPopup(googleAuthProvider).then((result: { user: { uid: any; email: any; photoURL: any; displayName: any; }; }) => {
      const { uid, email, photoURL, displayName } = result.user;

      this.setUser({ uid, email, photoURL, displayName });
    });
  }

  public signInFaceBook(): void {
    auth.signInWithPopup(faceBookAuthProvider).then((result: { user: { uid: any; }; }) => {
      const { uid } = result.user;

      console.log(uid);
    });
  }
  public signOutFaceBook(): void {
    auth.signOut().then(() => {});
  }

  public signOutGoogle(): void {
    auth.signOut().then(() => {});
  }

  private addAuthStateChangeHandler(): void {
    auth.onAuthStateChanged((result: { uid: any; email: any; photoURL: any; displayName: any; }) => {
      if (result) {
        const { uid, email, photoURL, displayName} = result;
        this.setUser({ uid, email, photoURL, displayName });
      } else {
        this.setUser({ uid: '', email: '', photoURL: '', displayName: '' });
      }
    });
  }
}
