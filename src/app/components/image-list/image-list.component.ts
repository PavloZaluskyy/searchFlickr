import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/service/search.service';
import { Image } from '../../shared/interface/image'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  keyword: string = '';
  currPage: number = 1;
  images: Image[] = [];
  isLoader: boolean = false;

  
  constructor( private searchService: SearchService ) { }

  onChangedPage(increased:any){
    this.currPage = increased;
    this.sentSerch(this.keyword)
  }



  sentSerch(increased:any){
    this.keyword = increased;
    this.searchService.serch(increased, this.currPage)
      .toPromise()
      .then( res => {
        this.images = res;
        let timer = setTimeout( () => this.isLoader = true, 500);
      });
  }
  ngOnInit(): void {
  }

}
