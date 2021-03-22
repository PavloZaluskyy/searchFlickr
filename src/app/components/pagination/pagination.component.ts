import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() onChangedPage = new EventEmitter<number>();
  
  currPage: number = 1;
  maxPages: number = 0;
  maxShowPages: number[] = [];
  nextDisabled: boolean = false;
  previousDisabled: boolean = true;

  constructor( private searchService: SearchService ) { }

  nextPage(): void {
    if(this.currPage !== this.maxPages){
      this.nextDisabled = false;
      this.previousDisabled = false;
      this.currPage++;
      this.onChangedPage.emit(this.currPage);
      if(this.currPage >= 4){
        this.createArrShowPage();
      }
    }else {
      this.nextDisabled = true;
    }
  }

  choosePage(numberPage): void {
    this.currPage = numberPage;
    this.onChangedPage.emit(this.currPage);
    if(this.currPage > 3){
      this.createArrShowPage();
    }
  }

  previousPage(): void {
    if(this.currPage  !== 1){
      this.previousDisabled = false;
      this.nextDisabled = false;
      this.currPage--;
      this.onChangedPage.emit(this.currPage);
      if(this.currPage >= 4){
        this.createArrShowPage();
      }
    }else{
      this.previousDisabled = true;
    } 
  }

  createArrShowPage(): void {
    this.maxShowPages = [];
    let maxSteps = 7;
    if(this.maxPages < maxSteps){
      if(this.currPage === 1){
        for(let i = 1; i <= this.maxPages; i++){
          this.maxShowPages.push(i);
        }
      } 
    }else{
      if(this.currPage === 1){
        for(let i = 1; i <= maxSteps; i++){
          this.maxShowPages.push(i);
        }
      } 
      if(this.currPage > 1 && this.currPage < this.maxPages - 3){
        this.maxShowPages = [ ... [this.currPage -3, this.currPage - 2, this.currPage - 1, this.currPage, this.currPage + 1, this.currPage + 2, this.currPage + 3] ];
      }
      if (this.currPage >= this.maxPages - 3){
        for(let i = this.maxPages - 7; i <= this.maxPages; i++){
          this.maxShowPages.push(i);
        }
      }
    }
  }

  ngOnInit(): void {
    this.maxPages = this.searchService.maxPages;
    this.currPage =  this.searchService.currPage;
    this.createArrShowPage();
  }

}
