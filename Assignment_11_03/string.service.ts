import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  GetCountCapital(Value : string) : number
  {
    var i = 0;
    var Count = 0;
    for(i = 0; i < Value.length; i++)
    {
      if((Value[i] >= 'A') && (Value[i] <= 'Z')) 
      {
        Count++;
      }
    }
    return Count;
  }
}
