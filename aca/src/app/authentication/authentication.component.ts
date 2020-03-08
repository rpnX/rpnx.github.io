import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  constructor(private authService: AuthService) {}

  private isAutorized: boolean = false;
  private email: string = '';
  private photoURL: string = '';
  private diplayName: string = '';

  public ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.setUser(user);
    });
  }

  private signInGoogle(): void {
    this.authService.signInGoogle();
  }
  private signOutGoogle(): void {
    this.authService.signOutGoogle();
  }

  private authenticationGoogle(): void {
    if (this.isAutorized) {
      this.signOutGoogle();
    } else {
      this.signInGoogle();
    }
  }

  private signInFaceBook(): void {
    this.authService.signInFaceBook();
  }
  private signOutFaceBook(): void {
    this.authService.signOutFaceBook();
  }

  private authenticationFaceBook(): void {
    if (this.isAutorized) {
      this.signOutGoogle();
    } else {
      this.signInFaceBook();
    }
  }


  private setUser(user): void {
    if (user.email) {
      this.isAutorized = true;
      this.email = user.email;
      this.photoURL = user.photoURL;
      this.diplayName = user.displayName;
    } else {
      this.isAutorized = false;
      this.email = '';
      this.photoURL = '';
    }
  }
}
