import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Output() sentSerch = new EventEmitter<string>();

  keyword: string;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.keyword = '';
  }

  search() {
    if (this.keyword.trim()) {
      this.sentSerch.emit(this.keyword.toLowerCase())
    }
  }

}
