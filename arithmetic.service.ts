import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  GetAdd(No1 : number, No2 : number) : number
  {
    return No1 + No2;
  }

  GetSub(No1 : number, No2 : number) : number
  {
    return No1 - No2;
  }
}
