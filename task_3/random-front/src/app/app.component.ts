import {Component} from '@angular/core';
import {MessageService} from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-front';
  isClicked: boolean = false

  constructor(public messageService: MessageService) {}

  getRandomWord() {
    this.isClicked = !this.isClicked
    if (this.isClicked) {
      this.messageService.sendMessage();
    }
  }
}
