import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { IBlogs } from '../interfaces/blog.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  title = "Blog builder in Angular"
  blogs: IBlogs[] | undefined;
  blogById: IBlogs | undefined

  constructor(
    private blogServices: BlogService,
    private router: Router
  ){
    this.getBlogs()
  }

  getBlogs() {
    this.blogServices.getPosts().subscribe(posts => {
      this.blogs = posts;
      this.blogById = undefined
    })
  }

  getBlogById(id: number) {
    this.blogServices.getPostById(id).subscribe(post => {
      this.blogById = post;
      this.blogs = undefined;
      // this.router.navigate([`/post-single/${id}`])
    })
  }
}
