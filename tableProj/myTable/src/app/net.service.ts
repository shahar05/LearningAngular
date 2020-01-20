import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  people:any  = [

    {id: new Date().getTime() + 0, name: 'Shahar' , age:"32" , gender:"Male" },
    {id: new Date().getTime() + 1, name: 'Juli' , age:"62" , gender:"Female" },
    {id: new Date().getTime() + 2, name: 'Matan '  , age:"22" , gender:"Male" },
    {id: new Date().getTime() + 3, name: 'Sentence 1' , age:"82" , gender:"Male" },

  ];


  constructor() { }


}
