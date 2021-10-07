import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/i-blog';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  blogs : IBlog[];
  searchString: string = '';

  constructor(private _blogService: BlogService) {
    this.blogs = this._blogService.blogs;
  }

  ngOnInit(): void {
  }

  onDeleteClick(blogId: number) {
    this._blogService.deleteBlog(blogId);
    this.blogs = this._blogService.blogs;
  }
}
