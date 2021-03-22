import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FlickrPhoto } from '../interface/flickr-photo';
import { Image } from '../interface/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private key: string = 'ea1079003d4ccf4cf81fc6205d807ab7'; 
 currPage: number = 1;
 maxPages: number = 0;

  constructor( private http: HttpClient ) { }

  serch(keyworld: string, currPage: number = 1 ): Observable<Image[]> {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${this.key}&text=${keyworld}&format=json&nojsoncallback=1&per_page=50&page=${currPage}`;
    this.currPage = currPage;
    return this.http.get<FlickrPhoto[]>(url + params)
      .pipe( map((res: any) => {
        const urlArr = [];
        this.maxPages = res.photos.pages;
        res.photos.photo.forEach((ph: FlickrPhoto) => {
          const photoObj = {
            url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
            title: ph.title
          };
          urlArr.push(photoObj);
        });  
        return urlArr;
      }));
  }
}
