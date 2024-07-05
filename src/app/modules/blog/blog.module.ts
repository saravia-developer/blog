import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
