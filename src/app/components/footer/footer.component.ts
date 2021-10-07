import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  message = "@copyright 2021 www.my-blog.com"
  constructor() { }

  ngOnInit(): void {
  }

}
