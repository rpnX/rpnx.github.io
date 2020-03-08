import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { MessagesService } from '../services/messages.service';
import { User } from '../interfaces/interface';

@Component({
  selector: 'app-message-sending',
  templateUrl: './message-sending.component.html',
  styleUrls: ['./message-sending.component.scss']
})
export class MessageSendingComponent implements OnInit {
  private message: string = '';
  private uid: string = '';
  private email: string = '';
  private messageSendingInput: any;
  private placeholderText: string = 'Sign in to write messages';
  private seding: boolean = true;
  private displayName: string = '';

  constructor(private authService: AuthService,
              private messagesService: MessagesService) {
  }

  public ngOnInit(): void {
    this.authService.getUser().subscribe((user: User) => {
      this.setUser(user);
    });

    this.messageSendingInput = document.querySelector('#message-sending-input');
  }

  private sendMessage(): void {
    if (this.uid && this.message && this.displayName ) {
      if (this.message.trim()) {
        this.messagesService.sendMessage(this.message, this.email, this.displayName );
        this.message = '';
      }
    }
  }

  private keyPressHandler(event): void {
    if (event.code === 'Enter' && !event.shiftKey) {
      this.sendMessage();
    }
  }

  private clickHandler(): void {
    this.sendMessage();
    this.messageSendingInput.focus();
  }

  private setUser(user: User): void {
    this.uid = user.uid;
    this.email = user.email;
    this.displayName = user.displayName;

    if (user.uid) {
      this.placeholderText = 'Write you message text here';
    } else {
      this.placeholderText = 'Sign in to write messages';
    }
  }
}
