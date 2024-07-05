import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogs } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    public http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get<IBlogs[]>(this.baseUrl)
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<IBlogs>(`${this.baseUrl}/${id}`)
  }
}
