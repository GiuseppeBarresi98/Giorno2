import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { Post } from 'src/inteface/post';

@Component({
  selector: 'app-post-nonattivi',
  templateUrl: './post-nonattivi.component.html',
  styleUrls: ['./post-nonattivi.component.scss'],
})
export class PostNonattiviComponent implements OnInit {
  nonactivePosts: Post[] = [];
  constructor(private srv: ServiceService) {}

  ngOnInit(): void {
    this.srv
      .getPosts()
      .then((posts: any[]) => {
        posts.forEach((post) => {
          if (post.active === false) {
            this.nonactivePosts.push(post);
          }
        });
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei post:', error);
      });
  }
}
