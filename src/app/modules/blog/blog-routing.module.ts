import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogPostSingleComponent } from './blog-post-single/blog-post-single.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'post-single/:id',
    component: BlogPostSingleComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
