import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/i-blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  blogForm: FormGroup = new FormGroup({});
  blogId: number = 0;
  isEdit = false;
  initialData: IBlog = {
    blogId: 0,
    author: '',
    title: '',
    img: '',
    category: '',
    description: ''
  };;

  constructor(private _blogService : BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.isEdit = true;
        this.blogId = param.id;
      }
    });

    if (this.blogId) {
      this._blogService.blogs.forEach((blog) => {
        if (blog.blogId == this.blogId) {
          this.initialData = blog;
        }
      });
      this.initForm();
    } else {
      this.initForm();
    }
  }

  initForm() {
    let blogId = this.initialData ? this.initialData.blogId : 0;
    let author = this.initialData ? this.initialData.author : '';
    let title = this.initialData ? this.initialData.title : '';
    let img = this.initialData ? this.initialData.img : '';
    let category = this.initialData ? this.initialData.category : '';
    let description = this.initialData ? this.initialData.description : '';

    this.blogForm = new FormGroup({
      blogId : new FormControl(blogId, Validators.required),
      title : new FormControl(title, Validators.required),
      author : new FormControl(author, Validators.required),
      img : new FormControl(img, Validators.required),
      category: new FormControl(category, Validators.required),
      description: new FormControl(description)
    });

    this.isEdit && this.blogForm.get('blogId')!.disable();
  }

  onSubmit() {
    if (this.isEdit) {
      this.blogForm.get('blogId')!.enable()
      this._blogService.updateBlog(this.blogId, this.blogForm.value);
    } else {
      this._blogService.addBlog(this.blogForm.value);
    }

    this.router.navigate(['']);
  }
}
