import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { Post } from 'src/inteface/post';
@Component({
  selector: 'app-post-attvi',
  templateUrl: './post-attvi.component.html',
  styleUrls: ['./post-attvi.component.scss'],
})
export class PostAttviComponent implements OnInit {
  activePosts: Post[] = [];
  constructor(private srv: ServiceService) {}

  ngOnInit() {
    this.srv
      .getPosts()
      .then((posts: any[]) => {
        posts.forEach((post) => {
          if (post.active === true) {
            this.activePosts.push(post);
          }
        });
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei post:', error);
      });
  }
}
