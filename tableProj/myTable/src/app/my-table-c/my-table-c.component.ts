import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-table-c',
  templateUrl: './my-table-c.component.html',
  styleUrls: ['./my-table-c.component.css']
})

export class MyTableCComponent implements OnInit {

  @Input() people: any[];
  @Output() clickRow: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() {

  }

  ngOnInit() {

  }

  deleteElement(id) {
    this.clickRow.emit(id);
  }
  pushElement() {
    this.people.push(
      { id: new Date().getTime() , name: new Date().getTime() + " ", age: "82", gender: "Male" }
    );
  }

}
