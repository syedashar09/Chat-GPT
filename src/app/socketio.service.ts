import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  constructor(private http: HttpClient) {}

  // sendPostRequest(apiUrl: string, requestBody: any) {
  //   return this.http.post(apiUrl, requestBody);
  // }
  // private apiUrl =
  //   'https://api.openai.com/v1/engines/davinci-codex/completions';
  // constructor(private http: HttpClient) {}
  // generateText(prompt: string, model: string = 'text-davinci-002') {
  //   const body = {
  //     prompt: prompt,
  //     model: model,
  //   };
  //   return this.http.post(this.apiUrl, body);
  // }
}
