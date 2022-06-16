import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() url: any;
  description = "Leao"
  // url = "https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg";

  constructor() {
  }


}
