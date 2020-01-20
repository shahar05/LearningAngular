

  import { Component } from '@angular/core';
  import{NetService} from './net.service'
import { log } from 'util';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {

  title = 'myTable';

  constructor( private netService : NetService  ){

  }

deleteElement(id){
  
  console.log(id);
  
  this.netService.people  = this.netService.people.filter( p => p.id != id  );
  
}

  
}
