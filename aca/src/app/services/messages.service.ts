import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { db } from '../../firebase/firebase';

import { AuthService } from './auth.service';

@Injectable()
export class MessagesService {
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.setUser(user);
    });
    this.getMessages();
  }

  private email: string;
  private displayName: string;
  private observedArrayOfMessages = new Subject<Array<object>>();
  private observedEditableMessage = new Subject<object>();

  public setArrayOfMessages(messages: Array<object>): void {
    this.observedArrayOfMessages.next(messages);
  }

  public getArrayOfMessages(): Observable<Array<object>> {
    return this.observedArrayOfMessages.asObservable();
  }

  public setEditableMessage(editableMessage: object): void {
    this.observedEditableMessage.next(editableMessage);
  }

  public getEditMessage(): Observable<object> {
    return this.observedEditableMessage.asObservable();
  }

  public sendMessage(message, email, displayName): void {
    db.collection('messages').doc().set({ email, message, timeStamp: this.getTimeStamp(), displayName, });
  }

  public deleteMessage(id, email): void {
    if (this.email === email) { db.collection('messages').doc(id).delete(); }
  }

  public editMessage(id, message): void {
    db.collection('messages').doc(id).update({ message });
  }

  private getMessages(): void {
    db.collection('messages').orderBy('timeStamp', 'asc').onSnapshot(querySnapshot => {
        const messages: Array<object> = [];

        querySnapshot.forEach(doc => {
          const message = doc.data();

          message.id = doc.id;
          messages.push(message);
        });
        this.setArrayOfMessages(messages);
      });
  }

  private getTimeStamp(): string {
    const currentDate = new Date();
    const [, , dayOfTheMonth, year, time] = currentDate.toString().split(' ');
    const month = currentDate.getMonth() + 1;

    if ( month < 10) {
        return `${year}.0${month}.${dayOfTheMonth} ${time}`;
      } else {
        return `${year}.${month}.${dayOfTheMonth} ${time}`;
      }
  }

  private setUser(user): void {
    if (user.email) {
      this.email = user.email;
      this.displayName = user.displayName;
    } else {
      this.email = '';
    }
  }
}
