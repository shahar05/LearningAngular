
import { Component } from '@angular/core';
import { NetService } from './net.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'myTable';
  people: any[];
  constructor(private netService: NetService) {
    this.people = this.netService.getPeople();
  }

  deleteElement(id) {
    this.people = this.people.filter(person => person.id !== id);
  }

}
