import { Component, Input, OnInit } from '@angular/core';

import { MessagesService } from '../services/messages.service';
import { Message } from '../interfaces/interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(private messagesService: MessagesService) {}

  @Input() message: Message;

  public ngOnInit(): void {}

  private editMessage(): void {
    const editableMessage = {
      id: this.message.id,
      email: this.message.email,
      message: this.message.message,
      displayName : this.message.displayName
    };

    this.messagesService.setEditableMessage(editableMessage);
  }

  private deleteMessage(): void {
    this.messagesService.deleteMessage(this.message.id, this.message.email);
  }
}
