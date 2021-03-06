import { Injectable } from '@angular/core';
import { Image } from '../interface/image';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private yourBookmark: Image[] = [];

  setImage(image: Image): void {
    if(!this.yourBookmark.includes(image)){
      this.yourBookmark.push(image);
    }
    localStorage.setItem('yourBookmark', JSON.stringify(this.yourBookmark));
  }

  getImage():Image[] | []  {
    if (localStorage.getItem('yourBookmark')){
      this.yourBookmark =  JSON.parse(localStorage.getItem('yourBookmark'));
      return this.yourBookmark;
    }
    return [];
  }

  removeImage(image: Image): void {
    this.yourBookmark = this.yourBookmark.filter(elem => elem.title !== image.title || elem.url !== image.url);
    localStorage.setItem('yourBookmark', JSON.stringify(this.yourBookmark));
  }

  constructor() { }
}
