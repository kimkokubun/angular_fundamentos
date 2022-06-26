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
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos)
      if (!photos.length) this.hasMore = false;
    });

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}