import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-my-table-c',
  templateUrl: './my-table-c.component.html',
  styleUrls: ['./my-table-c.component.css']
})

export class MyTableCComponent implements OnInit {

  @Input() people : any[];
  //@Output() clickRow : EventEmitter = new EventEmitter<any>();

  constructor() { 

  }

  ngOnInit() {
  }

  deleteElement(id){
      this.people  = this.people.filter( p => p.id != id  );




  }

  pushElement(){
    this.people.push(
      {id: new Date().getTime() + 10, name: new Date().getTime() +" " , age:"82" , gender:"Male" }
     );
  }


}
