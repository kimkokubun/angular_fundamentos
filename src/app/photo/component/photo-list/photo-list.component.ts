import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from "../../service/photo.service";
import {ActivatedRoute} from "@angular/router";
import {Photo} from "../../photo.interface";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService) {
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos)
      if (!photos.length) this.hasMore = false;
    });

  }

}
