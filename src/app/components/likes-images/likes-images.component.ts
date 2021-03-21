import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/interface/image';
import { BookmarkService } from '../../shared/service/bookmark.service';

@Component({
  selector: 'app-likes-images',
  templateUrl: './likes-images.component.html',
  styleUrls: ['./likes-images.component.css']
})
export class LikesImagesComponent implements OnInit {

  yourBookmarks: Image[] = [];
  isLoader: boolean = false;
  isEmpty: boolean = true;

  constructor( private  bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.yourBookmarks = this.bookmarkService.getImage()
      this.isLoader = true;   
      if(this.yourBookmarks[0]['url']) {
        console.log( this.yourBookmarks);
        this.isEmpty = false;
      } 
    }, 500);
    
    
  }

}
