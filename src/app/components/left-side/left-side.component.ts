import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  
  navObj = [
    {
      id: 1,
      iconClass: 'fa fa-cloud',
      ariaHiden: 'true',
      title: 'Flickr',
      url: ''
    },
    {
      id: 2,
      iconClass: 'fa fa-book',
      ariaHiden: 'true',
      title: 'Bookmarks',
      url: './bookmarks'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
