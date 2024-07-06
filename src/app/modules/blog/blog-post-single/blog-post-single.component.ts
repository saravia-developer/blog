import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { IBlogs } from '../interfaces/blog.interface';

@Component({
  selector: 'app-blog-post-single',
  templateUrl: './blog-post-single.component.html',
  styleUrls: ['./blog-post-single.component.scss']
})
export class BlogPostSingleComponent implements OnInit{

  id: number | null = null;
  blog: IBlogs | null = null;
  loading: boolean = false;

  constructor(
    private blogServices: BlogService,
    private router: ActivatedRoute
  ){
    this.router = inject(ActivatedRoute);
    // console.log(Object.values(this.router.snapshot.params));
    this.id = Number(Object.values(this.router.snapshot.params));
  }

  ngOnInit() {
    // this.router.queryParamMap.subscribe(params => {
    //   // console.log(params.has('id'));
    //   this.id = Number(params.get('id'));
    // });

    this.getBlogById(this.id as number);
  }

  getBlogById(id: number){
    this.loading = true;
    this.blogServices.getPostById(id).subscribe(blog => {
      this.blog = blog;
      this.loading = false;
    })
  }
}
