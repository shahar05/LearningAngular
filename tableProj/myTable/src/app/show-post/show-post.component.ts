import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  posts;
  selectedPost;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  getPostById(postId) {

    this.postService.getPostById(postId).subscribe((post) => {
      this.selectedPost = post;

    })
  }



}
