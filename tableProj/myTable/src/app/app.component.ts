

  import { Component } from '@angular/core';
  import{NetService} from './net.service'
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {

  title = 'myTable';

  constructor( private netService : NetService  ){

  }
  
}
