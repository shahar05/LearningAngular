import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-input-data-bind',
  templateUrl: './input-data-bind.component.html',
  styleUrls: ['./input-data-bind.component.css']
})
export class InputDataBindComponent implements OnInit {

  name: string = ""

  constructor() { }

  ngOnInit() {
  }

  writeTheChar(  event ){
      console.log(event);

      this.name = event.target.value;

    //  this.name += event.key

      
  }

  reset(){
    this.name = "";
  }

}
