import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSingleComponent } from './blog-post-single.component';

describe('BlogPostSingleComponent', () => {
  let component: BlogPostSingleComponent;
  let fixture: ComponentFixture<BlogPostSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostSingleComponent]
    });
    fixture = TestBed.createComponent(BlogPostSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
