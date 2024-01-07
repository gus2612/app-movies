import { Component, OnInit } from '@angular/core';
import { LINKS } from './links';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  readonly links? = LINKS;
  //readonly menu: IUserMenu[] = [];

  constructor() {}

  ngOnInit(): void {}
}
