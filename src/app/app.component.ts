import { Component } from '@angular/core';
import { SocketioService } from './socketio.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';
const SOCKET_ENDPOINT = 'http://localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './normalise.css'],
})
export class AppComponent {
  title = 'codex-frontEnd';
  messages: any = [];
  newMessage = '';
  text: any;
  socket: any;
  constructor(
    private SocketService: SocketioService,
    private formbuilder: FormBuilder
  ) {
    console.log(this.myform.value);
  }
  ngOnInit() {
    //    myform = this.formbuilder.group({
    //   input: new FormControl(''),
    // });

   
  }
 myform = new FormGroup({
      input: new FormControl(''),
    });
  handleSubmit() {
    this.SocketService.sendPostRequest(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: '{this.myform.value}',
      }
    ).subscribe((response) => {
      console.log(response);
    });
  }

  // async handleSubmit() {
  //   console.log('submit' + JSON.stringify(this.myform.value));
  // }
  // generateText() {
  //   this.SocketService.generateText('What is the meaning of life?').subscribe(
  //     (response) => {
  //       this.text = response.choices[0].text;
  //     }
  //   );
  // }

  // sendMessage() {
  //   if (this.newMessage) {
  //     this.messages.push({
  //       content: this.newMessage,
  //       isMine: true,
  //     });
  //     this.newMessage = '';
  //   }
  // }
  // setupSocketConnection() {
  //   this.socket = io(SOCKET_ENDPOINT);
  // }
}
