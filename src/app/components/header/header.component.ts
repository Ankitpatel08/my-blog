import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title="My Blog";
  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHamburgerClick(evt: any) {
    evt.preventDefault();
    this.menuOpen = !this.menuOpen;
  }

}
