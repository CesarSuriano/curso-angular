import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  consoleLog(value: string) {
    console.log(value)
  }
}
