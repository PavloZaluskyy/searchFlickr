import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { BookmarkService } from '../../shared/service/bookmark.service';
import { Image } from '../../shared/interface/image';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() image: Image;
  @Input() isBookmarks: boolean = false;
  @Input() hideFieldTags: boolean = false;

  tag: string = '';
  
  constructor( private bookmarkService: BookmarkService ) { }

  handleBookmarks(): void {
    if (!this.image.bookmark) {
      this.image.bookmark = true;
      this.bookmarkService.setImage(this.image);
    } else {
      this.image.bookmark = false;
      this.bookmarkService.removeImage(this.image);
    }
    this.isBookmarks = !this.isBookmarks;
  }

  addTag(): void {
    if (this.tag.trim()) {
      if (!this.image['tags']) {
        this.image['tags'] = [];
      }
      this.image['tags'].push(this.tag.toLowerCase());
      if (this.isBookmarks) {
        this.bookmarkService.setImage(this.image);
      }
    }
    this.tag = '';
  }

  ngOnInit(): void {
  }

}
