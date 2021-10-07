import { Injectable } from '@angular/core';
import { IBlog } from './i-blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: IBlog[];

  constructor() {
    this.blogs = [{
      blogId: 1,
      author: 'Ankit',
      title: 'what is photography?',
      img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'photography',
      description: 'Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image.'
    }, {
      blogId: 2,
      author: 'Ankit',
      title: 'what is programming?',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
      category: 'programming',
      description: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task'
    }, {
      blogId: 3,
      author: 'Ankit',
      title: 'what is drawing/sketching?',
      img: 'https://images.unsplash.com/photo-1525278070609-779c7adb7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80',
      category: 'drawing',
      description: 'the formation of a line by drawing some tracing instrument from point to point of a surface.'
    }]
   }

  addBlog(data: IBlog) {
    this.blogs.push(data);
  }

  updateBlog(id: number, data: IBlog) {
   this.blogs.forEach((blog, index) => {
     if(blog.blogId == id) {
       this.blogs[index] = data;
     }
   });
  }

  deleteBlog(id: number) {
   this.blogs = this.blogs.filter((blog) => blog.blogId !== id);
   console.log(this.blogs);
  }
}
