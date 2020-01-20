import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private netService : NetService) { }

  getAllPosts(){
    return this.netService.getAllPosts();
  }

  getPostById(postId){
    
    return this.netService.getPostById(postId);

  }

}


