import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-my-table-c',
  templateUrl: './my-table-c.component.html',
  styleUrls: ['./my-table-c.component.css']
})

export class MyTableCComponent implements OnInit {

  @Input() people: any[];
  @Output() clickRow: EventEmitter<Number> = new EventEmitter<Number>();
  allPosts;
  newPost;
  constructor(private postService : PostsService) {

  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts)=>{
        this.allPosts = posts;
    });
  }


  getPostById(postId){

    this.postService.getPostById(postId).subscribe((post)=>{
        this.newPost = post;

    })
  }

  deleteElement(id) {
    this.clickRow.emit(id);
  }

  pushElement() {
    this.people.push(
      { id: new Date().getTime() + 10, name: new Date().getTime() + " ", age: "82", gender: "Male" }
    );
  }


  

}
