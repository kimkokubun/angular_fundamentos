import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../../service/photo.service";
import {ActivatedRoute} from "@angular/router";
import {Photo} from "../../photo.interface";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

}
