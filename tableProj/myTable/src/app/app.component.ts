

  import { Component } from '@angular/core';
  import {NetService} from './net.service'
  import { log } from 'util';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {

  title = 'myTable';
  people:any[]
  constructor( private netService : NetService  ){
    this.people =this.netService.people; 
  }

deleteElement(id){
  console.log(id);
  this.people  = this.people.filter( p => p.id !== id  );

}
  
}
