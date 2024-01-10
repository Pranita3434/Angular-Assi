import { Injectable } from '@angular/core';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  GetChkPrime(No : number) : boolean
  {
    var i = 0;
    var Count = 0;
    for(i = 2; i<= No/2; i++)
    {
      if(No % i == 0)
      {
        return false;
      }
    }
    return true;
  }
}
