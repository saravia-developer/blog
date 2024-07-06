import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogPostSingleComponent } from './blog-post-single/blog-post-single.component';



@NgModule({
  declarations: [BlogComponent, BlogPostSingleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
