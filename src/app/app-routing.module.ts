import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/blogs',
  pathMatch: 'full' },
{
  path: 'blogs',
  component: BlogsListComponent
}, {
  path: 'create-blog',
  component: CreateBlogComponent
}, {
  path: 'edit-blog/:id',
  component: CreateBlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
