import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetService {



  people: any = [

    { id: new Date().getTime(), name: 'Shahar', age: "32", gender: "Male" },
    { id: new Date().getTime() + 1, name: 'Juli', age: "62", gender: "Female" },
    { id: new Date().getTime() + 2, name: 'Matan ', age: "22", gender: "Male" },
    { id: new Date().getTime() + 3, name: 'Sentence 1', age: "82", gender: "Male" },

  ];

  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.people;
  }

  setPeople(people) {
    this.people = people;
  }


  getPosts() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPostById(postId) {

    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/" + postId);

  }

}
