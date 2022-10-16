import {Injectable} from '@angular/core';
import {CompatClient, IMessage, Message, messageCallbackType, Stomp} from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  public stompClient: CompatClient | undefined;
  public randomWord: string | undefined;

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient?.subscribe('/message', (message) => {
        if (message.body) {
          that.randomWord = message?.body;
        }
      });
    });
  }

  sendMessage() {
    this.initializeWebSocketConnection();
    this.stompClient?.send('/app/send/message', {}, "");
  }
}
